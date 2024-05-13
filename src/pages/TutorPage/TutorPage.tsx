import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {Container} from "../../components/Container/Container.ts";
import {TutorInfoBlock} from "./TutorInfoBlock.tsx";
import {ReviewForm} from "./ReviewForm.tsx";
import {Routes, Route, useParams} from "react-router-dom";



export const TutorPage = () => {
    const {id} = useParams();
    return (
        <>
            <TitleBlock>
                <Container>
                    <SectionTitle color={"white"}>Лучшие профессиональные репетиторы на tutor.school</SectionTitle>
                </Container>
            </TitleBlock>
            <Routes>
                <Route path={"/"} element={<TutorInfoBlock tutorId={id}/>}/>
                <Route path={"/reviews/create"} element={<ReviewForm tutorId={id}/>}/>
            </Routes>
        </>
    );
};

const TitleBlock = styled.div`
    padding: 175px 0 65px 0;
    background-color: ${theme.colors.fontBlack};
`

