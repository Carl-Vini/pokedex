export class Pokemon {

    constructor(id, name, type, types, image) {
       this.id = id;
       this.name = name;
       this.type = type;
       this.types = types = [];
       this.image = image;
    }
  
}



const endPoints = [];

// const convertPokeApitoPokemon = (pkm) => {

//     pokemon.name = pkm.data.name
//     pokemon.id = pkm.data.id
//     pokemon.types = pkm.data.types.map((typeSlot) => typeSlot.type.name) 
//     pokemon.type = pkm.data.types[0].type.name
//     pokemon.image = pkm.data.sprites.other.dream_world.front_default

//     return pokemon
// }

for (let i = 1; i <= (10); i++) {
    endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
}


// export default Pokemon;