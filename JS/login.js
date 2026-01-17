const form = document.querySelector('#formUser');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    Ingresar();
})

function Ingresar() {
    const userEmail = document.querySelector('#InputEmail');
    const userPassword = document.querySelector('#InputPassword');

    const usuario = {
        userEmail: userEmail,
        userPassword: userPassword
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    form.reset()
}


