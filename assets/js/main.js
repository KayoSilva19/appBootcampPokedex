  const offSet = 0
  const limit = 10
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}$limit=${limit}`

  const listPokemonItem = document.querySelector('#pokemonListCard')
  poKeApi.getPokemons().then((pokemonList) => {
    listPokemonItem.innerHTML += pokemonList.map((pokemon) => convertPokemonList(pokemon)).join('')
  })

  function convertPokemonList(pokemon) {
    return `
    <li class="pokemonCard grass">
    <span class="pokemonNumber">#001</span>
    <span class="pokemonName">${pokemon.name}</span>
    <div class="contentCard">
      <ul class="listNamePokemon">
        <li>grass</li>
        <li>poison</li>
      </ul>
      
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
      
    </div>
    </li>`
  }