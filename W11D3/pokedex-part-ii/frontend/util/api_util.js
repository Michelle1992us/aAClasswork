export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}

//Create an API util function that fetches a single pokemon.

export const fetchSinglePokemon = (id) => {
  return $.ajax({
  method: 'GET',
  url: `/api/pokemon/${id}`
  })
}