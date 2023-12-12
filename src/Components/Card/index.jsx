import styled from 'styled-components'
import pokemons from "./pokemon.json"



const ContainerStyled = styled.div`
    font-family: 'Roboto', sans-serif;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    h1 {
        margin-bottom: 5px;
        margin-top: 50px;
        text-align: center;
        background-color: #fff;
    }

    @media screen and (min-width:900px) {
        max-width: 900px;
        margin: 1em auto;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        text-align: center;
        height: 100vh;
        width: 100vw;
        border-radius: 1.5rem;
    }
`

const Titulo = styled.h1`
    
    margin-bottom: 5px;
    margin-top: 50px;
    text-align: center;
    
    @media screen and (min-width:900px) {
        font-size: 30px;
        margin: 0;
        padding: 0;
    }

`


const CardStyled = styled.section`
    background-color: #14A06F;
    width: 65%;
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

    @media screen and (min-width:900px) {
        height: auto;
        width: 13vw;
        font-size: 15px;
        margin: 5px;
        padding: 20px;
        
    }

`

const ImgPokemonStyled = styled.img`
    max-width: 100%;
    height: 70px;
    align-self: flex-end;
    position: relative;
    top: -35px;
    right: 10px;

    @media screen and (min-width:900px) {

        height: 20vh;
        top: -15px;
    }


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

    @media screen and (min-width: 900px) {
        flex-direction: row;
        position: relative;
        top: -25px;

    }

`

// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;



// console.log(listaPokemon)



function Card() {
        // const [dados, setDados] = useState([])

        // useEffect(() => {
        //     const fetchData = () => {
        //         fetch(url)
        //         .then(response => response.json)
        //         .then(data => data.results)
        //         .then(pokemons => setDados(pokemons))
        //         .catch(error => console.log(error))
        //     }
        //     fetchData
        // })
   

    return (
        <ContainerStyled>
            {
                pokemons.map((pokemon) => (
                    <CardStyled key={pokemon.id}>
                        <Titulo> {pokemon.nome}  </Titulo>
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
        </ContainerStyled>
    )
}

export default Card;