const usuario = localStorage.getItem("usuario");

if (!usuario) {
  window.location.href = "login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("usuario");

  window.location.href = "login.html";
});
