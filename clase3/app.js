// Contenedor para mostrar los datos
const dataContainer = document.getElementById('data-container');

// Función para mostrar los personajes en el contenedor
function renderCharacters(characters) {
  dataContainer.innerHTML = ''; // Limpiar contenedor antes de agregar nuevos datos
  characters.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.image}" alt="${character.name}" width="100">
    `;
    dataContainer.appendChild(characterElement);
  });
}

// Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById('fetch-btn');
fetchBtn.addEventListener('click', () => {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
      renderCharacters(data.results); // Mostrar los personajes con la función renderCharacters
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

// Implementa las Solicitudes con Axios
const axiosBtn = document.getElementById('axios-btn');
axiosBtn.addEventListener('click', () => {
  axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      renderCharacters(response.data.results); // Mostrar los personajes con la función renderCharacters
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});
