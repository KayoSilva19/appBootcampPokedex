const poKeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon()
  pokemon.name = pokeDetail.name
  pokemon.number = pokeDetail.id

 const types = pokeDetail.types.map((typeSlot => typeSlot.type.name))
 const [typePrincipal] = types

 pokemon.types = types
 pokemon.type = typePrincipal

 pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
  
 return pokemon
}

poKeApi.getPokemonDetail = (pokemon) => {
 return fetch(pokemon.url)
          .then((response) => response.json())
          .then(convertPokeApiDetailToPokemon)
}
poKeApi.getPokemons = (offSet = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`

  return (
    fetch(url)
      .then((response) => response.json())
      .then((body) => body.results)
      .then((pokemonsList) => pokemonsList.map(poKeApi.getPokemonDetail))
      .then((details) => Promise.all(details))
      .then((pokemonsDetails) => pokemonsDetails)
      .catch((err) => console.log('ERROR :>> ', err))
  )
}

poKeApi.getPokeBall = (item) => {
  const url = `https://pokeapi.co/api/v2/item/${item}`

  return (
    fetch(url)
    .then((response) => response.json())
    .then((pokeBallDetails) => pokeBallDetails.sprites.default)
  )
}

poKeApi.getPokemonDetailsCustom = (number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${number}`

  return (
    fetch(url)
    .then((response) => response.json())
    .then((pokeBallDetails) => pokeBallDetails)
  )
}
poKeApi.getPokeBall = (item) => {
  const url = `https://pokeapi.co/api/v2/item/${item}`

  return (
    fetch(url)
    .then((response) => response.json())
    .then((pokeBallDetails) => pokeBallDetails.sprites.default)
  )

}
