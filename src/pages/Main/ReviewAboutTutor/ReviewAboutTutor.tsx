import styled from "styled-components";
import {Container} from "../../../components/Container/Container.ts";

import {SectionTitle} from "../../../components/SectionTitle/SectionTitle.tsx";
import {Review} from "../../../components/Review/Review.tsx";
// import {FlexWrapper} from "../../../components/FlexWrapper/FlexWrapper.tsx";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../styles/sliderStyle.css'

const responsive = {
    0: { items: 2 },
};


const items = [
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
];

export const ReviewAboutTutor = () => {
    return (
        <ReviewAboutTutorStyled>
            <Container>
                <SectionTitle margin={" 0 897px 48px 0"}>
                    Отзывы о репетиторах
                </SectionTitle>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                />
                {/*<FlexWrapper gap={"33px"}>*/}
                {/*    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>*/}
                {/*    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>*/}
                {/*</FlexWrapper>*/}

            </Container>
        </ReviewAboutTutorStyled>
    );
};

const ReviewAboutTutorStyled = styled.section`
    padding: 160px 0;
`
