const listPokemonItem = document.querySelector('#pokemonListCard')
const loadMobereButton = document.querySelector('#loadMore')

const maxRecords = 151

const limit = 10
let offSet = 0

function convertPokemonList(pokemon) {
  return `
  <li class="pokemonCard ${pokemon.type}">
  <span class="pokemonNumber">#${pokemon.number}</span>
  <span class="pokemonName">${pokemon.name}</span>
  <div class="contentCard">
    <ol class="listNamePokemon">
      ${pokemon.types.map(type => `<li class="${type}">${type}</li>`).join('')}
    </ol>
    
    <img src="${pokemon.photo}" alt="${pokemon.name}">
    
  </div>
  </li>`
}
function loadPokemonsItens(offSet, limit) {
  poKeApi.getPokemons(offSet, limit).then((pokemonList = []) => {
    listPokemonItem.innerHTML += pokemonList.map((pokemon) => convertPokemonList(pokemon)).join('')
  })
}

loadPokemonsItens(offSet, limit)
loadMobereButton.addEventListener('click', () => {
  offSet += limit
  const qtdRecord = offSet + limit

  if(qtdRecord >= maxRecords) {
    const newLimit = maxRecords - offSet
    loadPokemonsItens(offSet, newLimit)
    
    return loadMobereButton.parentElement.removeChild(loadMobereButton)
  }
  loadPokemonsItens(offSet, limit)
} )