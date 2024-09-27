const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonList = document.getElementById('pokemon-list');

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm) {
    fetch(`${apiUrl}${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        const pokemon = data;
        const pokemonHtml = `
          <div class="pokemon-card">
            <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <ul class="pokemon-stats">
                <li><strong>Número:</strong> ${pokemon.id}</li>
                <li><strong>Altura:</strong> ${(pokemon.height / 10).toFixed(1)} m</li>
                <li><strong>Peso:</strong> ${(pokemon.weight / 10).toFixed(1)} kg</li>
                <li><strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</li>
            </ul>
        </div>
        `;
        pokemonList.innerHTML = pokemonHtml;
      })
      .catch((error) => console.error(error));
  }
});
