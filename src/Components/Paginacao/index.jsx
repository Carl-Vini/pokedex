
import styled from "styled-components";

const ContainerButton = styled.div`
    text-align: center;
    margin: 1em 0 1em 0em; 

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
        width: 67.5vw;
        font-size: 14px;
        transition: 0.5s;
        

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