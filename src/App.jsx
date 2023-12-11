import Card from "./Components/Card";
import styled from "styled-components";
import CardTest from "./Components/Card/CardTest";

// import listaPokemon from "./Components/Card/listaPokemon";



const HeaderContainer = styled.header`
  text-align: center;
`

// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// // fetch(url)
// // .then( response => response.json())
// // .then(data => console.log(data))
// // .catch(error => console.log(error))
// // .finally(() => console.log('requisição concluida'))

// console.log(listaPokemon)

function App() {
  return (
    <div className="App">
      <HeaderContainer >
      <h1>Pokedex</h1>
      <Card />
      <CardTest />
      </HeaderContainer>
    </div>
  );
}

export default App;
