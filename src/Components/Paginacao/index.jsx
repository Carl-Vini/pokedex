
import styled from "styled-components";

const ContainerButton = styled.div`
    text-align: center;
    max-width: 100%;


    @media screen and (min-width: 900px) {
        
    }
`

const Botao = styled.button`
    border-radius: 10px;
    cursor: pointer; 
    width: 80vw ;
    background-color: #339bf7;
    padding: .5em;
    color: whitesmoke;
    font-weight: 700;
    border: none;
    
    
    @media screen and (min-width: 900px) {
        width:65.5%;
        font-size: 14px;
        transition: 0.5s;
        text-align: center;
        margin: .5em auto .04em 5.5em;
        

        &:hover {
            background-color: #47a5f8;
        }
    }
`


const Paginacao = (props) => {

    return (
        <ContainerButton>
            <Botao onClick={props.showMore}> More... </Botao>
        </ContainerButton>
    )
}

export default Paginacao;