import styled from "styled-components";
import {Container} from "../../components/Container/Container.ts";
import SelectTutorImg from "../../assets/SelectTutor-img.png";
import {SelectOption} from "./SelectOption.tsx";


export const SelectTutor = () => {

    return (
        <SelectTutorStyled>
            <Container>
                <Title>Выбирайте лучших репетиторов с помощью tutor</Title>
                <SelectOption/>
            </Container>
        </SelectTutorStyled>
    );
};

const SelectTutorStyled = styled.section`
    padding: 160px 0 184px 0;
    background-image: url(${SelectTutorImg});
    //width: 100%;
    //background-origin: border-box;
`

const Title = styled.h1`
    font-size: 54px;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 86px;
`

// const SelectOption = styled.div`
//     height: 155px;
//     border: 1px solid rgb(108, 108, 114);
//     background: rgba(245, 245, 245, 0.87);
// `
