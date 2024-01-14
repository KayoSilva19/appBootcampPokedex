const cardDetails = document.querySelector('.cardDetails')
const backButton = document.querySelector('#backButton')

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id") 
const typeUrl = urlParams.get("type") 


function convertCardDetails(pokemon) {
  return `
    <header class="headerDetails ${typeUrl}">
    <span class="number">#${pokemon.id}</span>
      <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
      <span class="pokeName">${pokemon.name}</span>
    </header>
    <div class="contentDetailsCard">
    <h3 class="">Habilidades</h3>
      <ol class="orderAbility">${pokemon.abilities.map((abilities) => `<li>${abilities.ability.name}</li>`).join('')}</ol>
    </div>
    `
}

function loadPokemonsDetails(id) {
  poKeApi.getPokemonDetailsCustom(id).then((pokemonList) => {
    cardDetails.innerHTML += convertCardDetails(pokemonList)
  })
}

loadPokemonsDetails(id)

backButton.addEventListener('click', () => {
  return history.back()
})
