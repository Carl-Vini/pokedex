import styled from 'styled-components'
import pokemons from "./pokemon.json"

const ContainerStyled = styled.div`
    font-family: 'Roboto', sans-serif;
    display: grid;
    grid-template-columns: 1fr 1fr;
   
`
const CardStyled = styled.section`
    background-color: #14A06F;
    width: 90%;
    border-radius: 20px;
    margin: .3em;
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    font-size: 12px;
    color: #fff;
    height: 130px;
`

const ImgPokemonStyled = styled.img`
    max-width: 100%;
    height: 70px;
    align-self: flex-end;
`

function Card() {
    return (
        <ContainerStyled>
            {
                pokemons.map((pokemon) => (
                    <CardStyled>
                        <h1> {pokemon.nome} </h1>
                        <ImgPokemonStyled src={pokemon.img} alt={pokemon.nome} ></ImgPokemonStyled>
                    </CardStyled>
                ))
            }
            {/* <h1> {pokemons.nome} </h1>
            <img src={pokemons.img} alt={pokemons.nome} />  */}
        </ContainerStyled>
    )
}

export default Card;