import styled from "styled-components";
import {Container} from "../Container/Container.ts";
import {SectionTitle} from "../SectionTitle/SectionTitle.tsx";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/sliderStyle.css'
import {ReactNode} from "react";

const responsive = {
    0: { items: 2 },
};

type ReviewAboutTutorPropsType = {
    reviewItems: Array<ReactNode>
    title: string
    status: 'loading' | 'loaded' | 'error';
}

export const ReviewAboutTutor = ({reviewItems, title, status}:ReviewAboutTutorPropsType) => {

    return (
        <ReviewAboutTutorStyled>
            <Container>
                <SectionTitle margin={" 0 897px 48px 0"}>
                    {title}
                </SectionTitle>
                {status === 'loaded' ? (<AliceCarousel
                    mouseTracking
                    items={reviewItems}
                    responsive={responsive}
                />) : (
                    <div>Загрузка отзывов....</div>
                )}

            </Container>
        </ReviewAboutTutorStyled>
    );
};

const ReviewAboutTutorStyled = styled.section`
    padding: 160px 0;
`
