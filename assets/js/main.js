const titlePokemon = document.querySelector('#titlePokemon')
const listPokemonItem = document.querySelector('#pokemonListCard')
const loadMobereButton = document.querySelector('#loadMore')

const maxRecords = 151

const limit = 10
let offSet = 0

const item = "master-ball"

function convertTitle(pokemon) {
  return `
   Pokedex <img src="${pokemon}" alt="${item}"/>
  `
}

function convertPokemonList(pokemon) {
  return `
  <li class="pokemonCard ${pokemon.type}">
  <a href="statsPokemon.html?id=${pokemon.number}&type=${pokemon.type}">
    <div class="pokemonNumber">
      <span class="pokemonName">${pokemon.name}</span>
      <span class="number">#${pokemon.number}</span>
    </div>
    <div class="contentCard">
      <ol class="listNamePokemon">
        ${pokemon.types.map(type => `<li class="${type}">${type}</li>`).join('')}
      </ol>
      
      <img src="${pokemon.photo}" alt="${pokemon.name}">
      
    </div>
  </a>
  </li>`
}

function loadPokemonsItens(offSet, limit) {
  poKeApi.getPokemons(offSet, limit).then((pokemonList = []) => {
    listPokemonItem.innerHTML += pokemonList.map((pokemon) => convertPokemonList(pokemon)).join('')
  })
}

function loadTitle(item) {
  poKeApi.getPokeBall(item).then((pokemonList = []) => {
    titlePokemon.innerHTML = convertTitle(pokemonList)
  })
}

loadTitle(item)
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
})

