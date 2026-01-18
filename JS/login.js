function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

const loginForm = document.getElementById("formUser");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("InputEmail").value;
    const password = document.getElementById("InputPassword").value;

    const users = getUsers();

    const userValid = users.find(
      user => user.email === email && user.password === password
    );

    if (!userValid) {
      alert("Credenciales incorrectas");
      return;
    }

    alert("Inicio de sesión exitoso");
    localStorage.setItem("userLogged", email);

    window.location.href = "index.html";
  });
}

