// Obtener usuarios del localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Guardar usuarios
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

const registerForm = document.getElementById("formUser");

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("InputEmail").value;
    const password = document.getElementById("InputPassword").value;

    const users = getUsers();

    const userExists = users.some(user => user.email === email);
    if (userExists) {
      alert("Este usuario ya existe");
      return;
    }

    users.push({ email, password });
    saveUsers(users);

    alert("Cuenta creada correctamente");
    window.location.href = "login.html";
  });
}