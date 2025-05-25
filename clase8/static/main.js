
const registerButton = document.querySelector('#register-button');
const togglePasswordButtons = [...document.querySelectorAll(".toggle-password")];

const handleRegister = (e) => {
    e.preventDefault();
    const form = document.querySelector('.form-container form');
    const userEmail = form.children[1].value;
    if(!userEmail){
        alert("Debes de ingresar un correo");
        return;
    }
    const userPassword = form.children[3].value;
    const userConfirmationPassword = form.children[5].value;
    if(userPassword !== userConfirmationPassword){
        alert("Ambas contraseñas deben ser iguales");
        return;
    }
    if(!regexPassword.test(userPassword)){
        alert("Tu contraseña debe contener al menos 8 caracteres, una letra mayuscula, una minuscula, un número y un caracter especial");
        return;
    }
    console.log(userEmail, userPassword, userConfirmationPassword);
}

const handleTogglePassword = (e) => {
    e.preventDefault();
    const input = e.target.parentElement.children[0];
    if(input.type === "password"){
        input.type = "text";
    } else {
        input.type = "password"
    }
}

registerButton.addEventListener('click', (e) => handleRegister(e));
togglePasswordButtons.forEach((button) => {
    button.addEventListener("click", (e) => handleTogglePassword(e));
})