import { useState } from "react";
import styled from "styled-components";

const ContainerButton = styled.div`
    text-align: center;
    margin: 1em 0 1em 0em;
`

const Botao = styled.button`
    border-radius: 10px;
    cursor: pointer; 
    width: 50vw ;
    background-color: #339bf7;
    padding: .5em;
    color: #ecbe13;
    font-weight: 700;
`


const Paginacao = (props) => {


  



    return (
        <ContainerButton>
            <Botao onClick={props.showMore}> Mostrar mais </Botao>
        </ContainerButton>
    )
}

export default Paginacao;