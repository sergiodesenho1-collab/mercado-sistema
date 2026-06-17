const lista = document.getElementById("listaVendas");

const vendas = JSON.parse(localStorage.getItem("vendas")) || [];

renderizar();

function renderizar() {
  lista.innerHTML = "";

  vendas.forEach((venda) => {
    let total = 0;

    let itens = venda.itens
      .map((item) => {
        const subtotal = item.quantidade * Number(item.preco);

        total += subtotal;

        return `
                ${item.nome}
                (${item.quantidade})
            `;
      })
      .join("<br>");

    lista.innerHTML += `
        <tr>

            <td>${venda.data}</td>

            <td>${itens}</td>

            <td>
                R$ ${total.toFixed(2)}
            </td>

        </tr>
        `;
  });
}
