import styled from "styled-components";
import {Container} from "../../components/Container/Container.ts";
import photo from "../../assets/a914477ee298aae91e6599f931bc51d8.jpg"

export const Home = () => {
    return (
        <HomeStyled>
            <Container>
                <Image src={photo} alt={'котик'}/>
            </Container>
        </HomeStyled>
    );
};

const HomeStyled = styled.section`
    padding: 65px 0;

`

const Image = styled.img`

`