import styled from "styled-components";
import { completeList } from "./Components/Card/CompleteRequisição";
import CardComplete from "./Components/Card/CardComplete";
import Navbar from "./Components/Navbar";
import Paginacao from "./Components/Paginacao";
import { useState } from "react";

// import listaPokemon from "./Components/Card/listaPokemon";

const HeaderContainer = styled.header`
  text-align: center;
  
`
// const offset = 0;
//  let limit = 12;


// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// // fetch(url)
// // .then( response => response.json())
// // .then(data => console.log(data))
// // .catch(error => console.log(error))
// // .finally(() => console.log('requisição concluida'))

// console.log(listaPokemon)
console.log(completeList)

function App() {



  return (
    <div className="App">
      <HeaderContainer >
        <Navbar />
      </HeaderContainer>
        <CardComplete />
    </div>
  );
}

export default App;
