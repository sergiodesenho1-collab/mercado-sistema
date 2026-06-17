const form = document.getElementById("formLogin");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === "admin@mercado.com" && senha === "123456") {
    localStorage.setItem("usuario", email);

    window.location.href = "dashboard.html";
  } else {
    document.getElementById("mensagem").innerText =
      "Usuário ou senha inválidos";
  }
});
