export const completeList = {}

completeList.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
}

completeList.getPokemons = async (offset = 0,limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) =>  response.json())
    .then((data) => data.results)
    .then((pokemons) => pokemons.map((completeList.getPokemonsDetail(pokemons))))
    .then((requests) => Promise.all(requests))
    .then((detalhes) => {
        debugger
        console.log(detalhes)
    })
    .catch((error) => console.error(error))
} 