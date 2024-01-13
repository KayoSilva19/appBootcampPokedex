

const poKeApi = {}
poKeApi.getPokemons = (offSet = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}$limit=${limit}`

  return (
    fetch(url)
      .then((response) => response.json())
      .then((body) => body.results)
      .catch((err) => console.log('ERROR :>> ', err))
  )
}
