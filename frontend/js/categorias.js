const form = document.getElementById("formCategoria");
const lista = document.getElementById("listaCategorias");

let categorias = JSON.parse(localStorage.getItem("categorias")) || [];

let editando = null;

renderizar();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const categoria = {
    id: Date.now(),
    nome: document.getElementById("nomeCategoria").value,
  };

  if (editando !== null) {
    categoria.id = categorias[editando].id;

    categorias[editando] = categoria;

    editando = null;
  } else {
    categorias.push(categoria);
  }

  salvar();

  form.reset();
});

function salvar() {
  localStorage.setItem("categorias", JSON.stringify(categorias));

  renderizar();
}

function renderizar() {
  lista.innerHTML = "";

  categorias.forEach((categoria, index) => {
    lista.innerHTML += `
      <tr>

        <td>${categoria.id}</td>

        <td>${categoria.nome}</td>

        <td>

          <button onclick="editar(${index})">
            ✏️
          </button>

          <button onclick="excluirCategoria(${index})">
            🗑️
          </button>

        </td>

      </tr>
    `;
  });
}

function editar(index) {
  document.getElementById("nomeCategoria").value = categorias[index].nome;

  editando = index;
}

function excluirCategoria(index) {
  if (confirm("Deseja excluir esta categoria?")) {
    categorias.splice(index, 1);

    salvar();
  }
}
