const planetas = require('./planetas');
// Aquí mostraremos la información de los planetas

planetas.forEach(planeta => {
  console.log(`¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  if (planeta.coordenadas) {
    console.log(`Coordenadas estelares:`);
    console.log(`  Ascensión recta: ${planeta.coordenadas.ascensionRecta}`);
    console.log(`  Declinación: ${planeta.coordenadas.declinacion}`);
  }
  console.log('---');
});
