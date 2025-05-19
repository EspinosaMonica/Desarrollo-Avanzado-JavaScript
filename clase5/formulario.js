document.getElementById('registroEvento').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita envío automático

  // Variables
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const archivoInput = document.getElementById('archivo');
  const archivo = archivoInput.files[0];

  // Validaciones básicas
  if (!nombre) {
    alert('Por favor, ingresa tu nombre completo.');
    return;
  }

  if (!correo) {
    alert('Por favor, ingresa tu correo electrónico.');
    return;
  } else if (!validarEmail(correo)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }

  if (!telefono) {
    alert('Por favor, ingresa tu número de teléfono.');
    return;
  } else if (!validarTelefono(telefono)) {
    alert('Por favor, ingresa un número de teléfono válido (solo números, 7-15 dígitos).');
    return;
  }

  if (intereses.length === 0) {
    alert('Por favor, selecciona al menos un interés.');
    return;
  }

  if (!horario) {
    alert('Por favor, selecciona un horario preferido.');
    return;
  }

  if (!fecha) {
    alert('Por favor, selecciona una fecha para el evento.');
    return;
  } else if (!validarFechaNoPasada(fecha)) {
    alert('La fecha del evento no puede ser anterior a hoy.');
    return;
  }

  if (!hora) {
    alert('Por favor, selecciona una hora para el evento.');
    return;
  }

  if (archivo) {
    // Validación: solo archivos PDF o imagen y tamaño máximo 2MB
    const tiposPermitidos = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!tiposPermitidos.includes(archivo.type)) {
      alert('El archivo debe ser un PDF o una imagen (JPG, PNG).');
      return;
    }

    const maxSizeMB = 2;
    if (archivo.size > maxSizeMB * 1024 * 1024) {
      alert(`El archivo no debe superar los ${maxSizeMB}MB.`);
      return;
    }
  }

  // Si todo está bien
  alert('Registro exitoso. ¡Gracias por registrarte!');
  this.reset();
});

// Función para validar email con expresión regular simple
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Validar teléfono: solo números, longitud entre 7 y 15
function validarTelefono(tel) {
  const re = /^\d{7,15}$/;
  return re.test(tel);
}

// Validar que la fecha no sea anterior al día de hoy
function validarFechaNoPasada(fecha) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0); // Comparar solo fecha
  const fechaEvento = new Date(fecha);
  return fechaEvento >= hoy;
}
