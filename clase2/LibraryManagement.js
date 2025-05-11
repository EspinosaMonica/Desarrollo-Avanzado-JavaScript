// JSON
let biblioteca = {
    "libros": [
        { "titulo": "Los juegos del hambre", "autor": "Suzanne Collins", "genero": "Distopía", "disponible": true },
        { "titulo": "En llamas", "autor": "Suzanne Collins", "genero": "Distopía", "disponible": true },
        { "titulo": "Sinsajo", "autor": "Suzanne Collins", "genero": "Distopía", "disponible": true }
    ]
};

// Lectura de un archivo JSON
function leerDatos(callback) {
    setTimeout(() => {
        // Lectura del JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}

// Muestra libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // Simula un retraso antes de escribir el nuevo libro en el "archivo" (es decir, agregarlo al objeto)
    setTimeout(() => {
        biblioteca.libros.push(nuevoLibro);  // Agregar el libro a la colección
        console.log(`Libro agregado: ${titulo} por ${autor}`);
    }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    // Simula un retraso antes de actualizar la disponibilidad
    setTimeout(() => {
        const libro = biblioteca.libros.find(libro => libro.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            console.log(`Estado de "${titulo}" actualizado a: ${nuevoEstado ? 'Disponible' : 'Prestado'}`);
        } else {
            console.log(`No se encontró el libro: ${titulo}`);
        }
    }, 1000);
}

mostrarLibros();  // Muestra el inventario de libros
agregarLibro("Los juegos del hambre: la balada de pájaros cantores y serpientes", "Suzanne Collins", "Distopía", true);  // Agrega un nuevo libro
actualizarDisponibilidad("En llamas", false);  // Libro prestado
