import './style.css';

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');

let intentosNumero = 0;

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);
    intentosNumero++;

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
    } else if (numeroJugador === numeroSecreto) {
        mensaje.textContent = `¡Felicidades! ¡Adivinaste el número en ${intentosNumero} intento${intentosNumero > 1 ? 's' : ''}!`;
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = 'El número es más alto.';
    } else {
        mensaje.textContent = 'El número es más bajo.';
    }
});

// Letras
const letras = 'abcdefghijklmnopqrstuvwxyz';
const letraSecreta = letras[Math.floor(Math.random() * letras.length)];

const inputLetra = document.getElementById('letra');
const botonAdivinar1 = document.getElementById('adivinar1');
const mensaje1 = document.getElementById('mensaje1');

let intentosLetra = 0;

botonAdivinar1.addEventListener('click', () => {
  const letraJugador = inputLetra.value.toLowerCase();
  intentosLetra++;

  if (!letraJugador || letraJugador.length !== 1 || !letras.includes(letraJugador)) {
    mensaje1.textContent = 'Por favor, ingresa una letra válida entre la a y la z.';
  } else if (letraJugador === letraSecreta) {
    mensaje1.textContent = `¡Felicidades! ¡Adivinaste la letra en ${intentosLetra} intento${intentosLetra > 1 ? 's' : ''}!`;
  } else if (letraJugador < letraSecreta) {
    mensaje1.textContent = 'La letra es más adelante en el abecedario.';
  } else {
    mensaje1.textContent = 'La letra es más atrás en el abecedario.';
  }
});


