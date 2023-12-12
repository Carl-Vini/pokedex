import axios from "axios";
import { useState, useEffect } from "react"
import styled from "styled-components";
import Paginacao from "../Paginacao";


// const offset = 0;
let limit = 12;
const firstGeneration = 151;
// const http = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


const ContainerStyled = styled.div`
    font-family: 'Roboto', sans-serif;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    background-color: #fff;

    @media screen and (min-width:900px) {
        max-width: 900px;
        margin: auto;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        text-align: center;
        border-radius: 1.5rem;
        
    }
`

const Titulo = styled.h1`
    
    margin-bottom: 5px;
    margin-top: 50px;
    text-align: center;
    

    &::first-letter {
        text-transform: capitalize; 
    }
    @media screen and (min-width:900px) {
        font-size: 30px;
        margin: 0;
        padding: 0;
    }

`


const CardStyled = styled.section`
    background-color: #40a346;
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

    &.fire {
        background-color: #d11e48;
    }

    &.grass {
        background-color: #b4df37;
    }

    &.water {
        background-color: #60f0c0;
    }

    &.bug {
        background-color: #5a2e2e;
    }

    &.normal {
        background-color: #a6a877;
    }

    &.electric {
        background-color: #f7cf2e;
    }

    &.ice {
        background-color: #98d5d7
    }

    &.ground {
        background-color: #dfbf69;
    }

    &.flying {
        background-color: #a98ff0;
    }

    &.poison {
        background-color: #a040a0;
    }

    &.fighting {
        background-color: #bf3029;
    }

    &.psychic {
        background-color: #f65687;
    }

    &.dark {
        background-color: #725847;
    }

    &.rock {
        background-color: #b8a137;
    }

    &.ghost {
        background-color: #6e5896;
    }

    &.steel {
        background-color: #b9b7cf;
    }

    &.dragon {
        background-color: #6f38f6;
    }

    &.fairy {
        background-color: #f9aec7;
    }


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
    height: 80px;
    align-self: flex-end;
    position: relative;
    top: -40px;
    right: -10px;

    @media screen and (min-width:900px) {
        height: 15vh;
        top: 0px;
        right: 28px;
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
        
        border-radius: 20px;
        padding: 8px 15px 8px 15px;
        text-align: center;
    

    &.fire {
        background-color: #d11e48;
        filter: brightness(1.2);
    }

    &.grass {

        background-color: #b4df37;
        filter: brightness(1.2);
        
    }

    &.water {
        background-color: #60f0c0;
        filter: brightness(1.2);
        
    }

    &.bug {
        background-color: #5a2e2e;
        filter: brightness(1.2);
    }

    &.normal {

        background-color: #a6a877;
        filter: brightness(1.2);
        
    }

    &.electric {
        background-color: #f7cf2e;
        filter: brightness(1.2);
        
    }

    &.ice {
        background-color: #98d5d7;
        filter:brightness(1.2);    
    }

    &.ground {

        background-color: #dfbf69;
        filter: brightness(1.2);
        
    }

    &.flying {
        background-color: #a98ff0;
        filter: brightness(1.2);
        
    }

    &.poison {
        background-color: #a040a0;
        filter: brightness(1.2);
        
    }

    &.fighting {
        background-color: #bf3029;
        filter: brightness(1.2);
        
    }

    &.psychic {
        background-color: #f65687;
        filter: brightness(1.2);
        
    }

    &.dark {
        background-color: #725847;
        filter: brightness(1.2);
    }

    &.rock {
 
        background-color: #b8a137;
        filter: brightness(1.2);
    }

    &.ghost {
        background-color: #6e5896;
        filter: brightness(1.2);
    }

    &.steel {
        background-color: #b9b7cf;
        filter: brightness(1.2);
    }

    &.dragon {
        background-color: #6f38f6;
        filter: brightness(1.2);
    }

    &.fairy {
        background-color: #f9aec7;
        filter: brightness(1.2);
        
    }

}
    @media screen and (min-width: 900px) {
        flex-direction: row;   
    }

`

function CardComplete(props) {

    // const [pokemon, setPokemon] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState([])
    const [mostrarMaisPokemons, setMostrarMaisPokemons] = useState(limit);
    const [botaoRenderizado, setBotaoRenderizado] = useState(true)


    const endPoints = [];



    for (let i = 1; i <= (limit); i++) {
        endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    // useEffect(() => {
    //     fetch(http)
    //         .then(response => response.json())
    //         .then(data => {
    //             setPokemon(data.results)
    //         })

    // }, [])

    useEffect(() => {
        //  pokemon?.map((requi) => fetch(requi.url)
        //  .then(response => response.json()))
        // .then(requisitions => Promise.all(requisitions))
        axios.all(endPoints.map(endPoint => axios.get(endPoint)))
            .then(res => setPokemonDetail(res))

        // axios.get(http)
        // .then((res) => setPokemonDetail(res.data.results))
        // console.log(endPoints)

    }, [endPoints])


    const mostrarMais = () => {
        limit += 12;
        setMostrarMaisPokemons(limit);
        for (let i = 1; i <= (mostrarMaisPokemons); i++) {
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        if (limit >= firstGeneration) {
            limit = 151
            setBotaoRenderizado(false)
        };
        
        
        console.log(endPoints)
    }


   


    return (
        <>
            <ContainerStyled>
                {
                    pokemonDetail.map((poke) => (
                        <CardStyled key={poke.data.id} className={poke.data.types[0].type.name} id={poke.data.id}>
                            <Titulo > {poke.data.name}  </Titulo>
                            <Type >
                                <li className={poke.data.types[0].type.name}>
                                    {poke.data.types[0].type.name}
                                </li>
                                {
                                    poke.data.types[1] && <li className={poke.data.types[1].type.name}>
                                        {poke.data.types[1].type.name}
                                    </li>
                                }
                            </Type >
                            <ImgPokemonStyled src={poke.data.sprites.front_default} alt={poke.data.name} ></ImgPokemonStyled>
                        </CardStyled>
                    ))
                }

            </ContainerStyled>
            {
                botaoRenderizado && <Paginacao showMore={mostrarMais} />
            }

        </>
    )
}

export default CardComplete;