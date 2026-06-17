form.addEventListener("submit", (e) => {
  e.preventDefault();

  const produto = {
    codigo: document.getElementById("codigo").value,
    nome: document.getElementById("nome").value,
    preco: Number(document.getElementById("preco").value),
    estoque: Number(document.getElementById("estoque").value),
    categoria: document.getElementById("categoria").value,
  };

  if (editando !== null) {
    produtos[editando] = produto;
    editando = null;
  } else {
    const existe = produtos.find((p) => p.codigo === produto.codigo);

    if (existe) {
      alert("Já existe um produto com esse código!");
      return;
    }

    produtos.push(produto);
  }

  salvar();
  form.reset();
});
