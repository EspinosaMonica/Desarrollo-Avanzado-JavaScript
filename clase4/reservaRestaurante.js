// Simulando una base de datos de mesas
const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`Hay disponibilidad para ${mesasSolicitadas} mesa(s).`);
      } else {
        reject(`No hay suficientes mesas disponibles. Solo quedan ${mesasDisponibles} mesa(s).`);
      }
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exitoEnvio = Math.random() > 0.3; // 70% de éxito en el envío
      if (exitoEnvio) {
        resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
      } else {
        reject('Error al enviar el correo de confirmación.');
      }
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);

    console.log("Enviando correo de confirmación...");
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);

    console.log("Reserva completada con éxito.");
  } catch (error) {
    console.log("Error:", error);
  }
}

// Pruebas
hacerReserva("Monica Espinosa", 3);  // Reserva para 3 mesas
hacerReserva("Daniel Garcia", 6);   // 6 es mayor qe la disponiblidad
