import styled from "styled-components";

const Navbar = () => {
    
    const TituloPokedex = styled.img`
        width: 80vw;

        @media screen and (min-width:900px) {
            width: 40%;
    }

    `
    
    return (
        <div>
            <TituloPokedex src="https://fontmeme.com/permalink/231209/208344076cdbfbce4feb5dd73a7a8419.png"
                alt="nome pokedex com a fonte do Pokemon"
                 />
        </div>
    )
}

export default Navbar;