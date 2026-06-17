const form = document.getElementById("formFornecedor");
const lista = document.getElementById("listaFornecedores");

let fornecedores = JSON.parse(localStorage.getItem("fornecedores")) || [];

let editando = null;

renderizar();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fornecedor = {
    nome: document.getElementById("nome").value,
    cnpj: document.getElementById("cnpj").value,
    telefone: document.getElementById("telefone").value,
    email: document.getElementById("email").value,
  };

  if (editando !== null) {
    fornecedores[editando] = fornecedor;
    editando = null;
  } else {
    fornecedores.push(fornecedor);
  }

  salvar();
  form.reset();
});

function salvar() {
  localStorage.setItem("fornecedores", JSON.stringify(fornecedores));

  renderizar();
}

function renderizar() {
  lista.innerHTML = "";

  fornecedores.forEach((fornecedor, index) => {
    lista.innerHTML += `
      <tr>
        <td>${fornecedor.nome}</td>
        <td>${fornecedor.cnpj}</td>
        <td>${fornecedor.telefone}</td>
        <td>${fornecedor.email}</td>

        <td>

          <button onclick="editar(${index})">
            ✏️
          </button>

          <button onclick="excluirFornecedor(${index})">
            🗑️
          </button>

        </td>
      </tr>
    `;
  });
}

function editar(index) {
  const fornecedor = fornecedores[index];

  document.getElementById("nome").value = fornecedor.nome;

  document.getElementById("cnpj").value = fornecedor.cnpj;

  document.getElementById("telefone").value = fornecedor.telefone;

  document.getElementById("email").value = fornecedor.email;

  editando = index;
}

function excluirFornecedor(index) {
  if (confirm("Deseja excluir este fornecedor?")) {
    fornecedores.splice(index, 1);

    salvar();
  }
}
