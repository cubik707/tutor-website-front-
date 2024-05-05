import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {Container} from "../../components/Container/Container.ts";
import {Review} from "../../components/Review/Review.tsx";
import {TutorInfoBlock} from "./TutorInfoBlock.tsx";
import {ReviewForm} from "./ReviewForm.tsx";

const reviewItems = [
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
];

export const TutorPage = () => {

    return (
        <>
            <TitleBlock>
                <Container>
                    <SectionTitle color={"white"}>Лучшие профессиональные репетиторы на tutor.school</SectionTitle>
                </Container>
            </TitleBlock>
            {/*<TutorInfoBlock reviewItems={reviewItems}/>*/}
            <ReviewForm/>
        </>
    );
};

const TitleBlock = styled.div`
    padding: 175px 0 65px 0;
    background-color: ${theme.colors.fontBlack};
`

