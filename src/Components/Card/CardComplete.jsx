import axios from "axios";
import { useState, useEffect } from "react"
import styled from "styled-components";


const offset = 0;
const limit = 12;
const http = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


const ContainerStyled = styled.div`
    font-family: 'Roboto', sans-serif;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    background-color: #fff;


 

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
        background-color: gray;
        border-radius: 20px;
        padding: 8px 15px 8px 15px;
        text-align: center;
    }

    @media screen and (min-width: 900px) {
        flex-direction: row;
              
    }

`

function CardComplete() {

    const [pokemon, setPokemon] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState([])

    let endPoints = [];
    

    useEffect(() => {
        fetch(http)
            .then(response => response.json())
            .then(data => {
                setPokemon(data.results)
            })

    }, [])

     useEffect(() => {
        //  pokemon?.map((requi) => fetch(requi.url)
        //  .then(response => response.json()))
        // .then(requisitions => Promise.all(requisitions))

        for(let i = 1; i < (limit + 1); i++) {
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        
        axios.all(endPoints.map(endPoint => axios.get(endPoint)))
        .then(res => setPokemonDetail(res))

        // axios.get(http)
        // .then((res) => setPokemonDetail(res.data.results))
        // console.log(endPoints)

     }, [pokemon])


     console.log(pokemonDetail)
     
    return (
        <ContainerStyled>
            {
                pokemonDetail.map((poke) => (
                    <CardStyled key={poke.data.id}>
                        <Titulo> {poke.data.name}  </Titulo>
                        <Type>
                            <li>
                                { poke.data.types[0].type.name }
                            </li>
                            {
                                poke.data.types[1] && <li>
                                    {poke.data.types[1].type.name}
                                </li>
                            }
                        </Type>
                        <ImgPokemonStyled src={poke.data.sprites.front_default} alt={poke.name} ></ImgPokemonStyled>
                    </CardStyled>
                ))
            }
        </ContainerStyled>
    )
}

export default CardComplete;