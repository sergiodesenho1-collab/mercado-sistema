let carrinho = [];

function buscarProduto() {
  const codigo = document.getElementById("codigoBarra").value;

  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  const produto = produtos.find((p) => p.codigo === codigo);

  if (!produto) {
    alert("Produto não encontrado");

    return;
  }

  carrinho.push(produto);

  renderizarCarrinho();

  document.getElementById("codigoBarra").value = "";
}

function renderizarCarrinho() {
  const tbody = document.getElementById("carrinho");

  tbody.innerHTML = "";

  let total = 0;

  carrinho.forEach((produto) => {
    total += Number(produto.preco);

    tbody.innerHTML += `
        <tr>
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco}</td>
        </tr>
        `;
  });

  document.getElementById("total").innerText = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarVenda() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio");

    return;
  }

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  carrinho.forEach((item) => {
    const produto = produtos.find((p) => p.codigo === item.codigo);

    if (produto) {
      produto.estoque = Number(produto.estoque) - 1;
    }
  });

  localStorage.setItem("produtos", JSON.stringify(produtos));

  const vendas = JSON.parse(localStorage.getItem("vendas")) || [];

  vendas.push({
    data: new Date().toLocaleString(),

    itens: carrinho,
  });

  localStorage.setItem("vendas", JSON.stringify(vendas));

  alert("Venda realizada");

  carrinho = [];

  renderizarCarrinho();
}
