import styled from "styled-components";
import {Container} from "../../components/Container/Container.ts";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {theme} from "../../styles/Theme.ts";
import {SelectOptionTutor} from "../../components/SelectOptionTutor/SelectOptionTutor.tsx";

export const SearchTutor = () => {


    return (
        <SearchTutorStyled>
            <Container>
                <SectionTitle color={"white"} margin={"0 0 30px 0"}>Удобный поиск репетитора tutor</SectionTitle>
                <SelectOptionTutor/>
            </Container>
        </SearchTutorStyled>
    );
};

const SearchTutorStyled = styled.section`
    padding: 175px 0 65px 0;
    background-color: ${theme.colors.fontBlack};
`

