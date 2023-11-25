import styled from 'styled-components'
import pokemons from "./pokemon.json"

const ContainerStyled = styled.div`
    font-family: 'Roboto', sans-serif;
    display: grid;
    grid-template-columns: 1fr 1fr;
   
    h1 {
        margin-bottom: 5px;
        margin-top: 50px;
    }
`
const CardStyled = styled.section`
    background-color: #14A06F;
    width: 75%;
    border-radius: 20px;
    margin: 0.3em;
    padding: 1.2em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    font-size: 12px;
    color: #fff;
    height: 120px;
    box-sizing: content-box;
`

const ImgPokemonStyled = styled.img`
    max-width: 100%;
    height: 70px;
    align-self: flex-end;
    position: relative;
    top: -35px;
    right: 10px;
`
const Type = styled.ol`
    list-style: none;
    display: flex;
    gap: 2px;
    flex-direction: column;
    padding: 0;
    margin: 0;
    

    li {
        background-color: gray;
        border-radius: 20px;
        padding: 8px 15px 8px 15px;
        text-align: center;
    }
`

function Card() {
    return (
        <ContainerStyled>
            {
                pokemons.map((pokemon) => (
                    <CardStyled key={pokemon.id}>
                        
                        <h1> {pokemon.nome}  </h1>
                        
                        <Type>
                            <li>
                                {pokemon.type}
                            </li>
                            {
                                pokemon.type2 &&   <li>
                                {pokemon.type2}
                            </li>
                            }
                          
                        </Type>
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