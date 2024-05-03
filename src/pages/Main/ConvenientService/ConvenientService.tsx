import styled from "styled-components";
import {Container} from "../../../components/Container/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper/FlexWrapper.tsx";

export const ConvenientService = () => {
    return (
        <WhyTutorStyled>
            <Container>
                <Title>
                    tutor – удобный сервис для выбора репетитора в Беларуси
                </Title>
                <FlexWrapper gap={"83px"}>
                    <Text>
                        Сервис tutor помогает ученикам и учителям быстро находить друг друга. За несколько минут вы сможете найти репетитора в своем городе с теми знаниями, которые вас интересуют. Далее следует только заполнить форму связи и в тот же день договориться о начале обучения.
                    </Text>
                    <Text>
                        Больше 30 000 репетиторов уже разместили свои анкеты на сайте tutor. Представлены как крупные города: Минск, Гродно, Могилево, Гомель, Брест, так и города поменьше: мы работает в более чем 100 населенных пунктов по всей Беларуси.
                    </Text>
                </FlexWrapper>
            </Container>
        </WhyTutorStyled>
    );
};

const WhyTutorStyled = styled.section`
    padding: 160px 0;
`

const Title = styled.h2`
    font-size: 36px;
    font-weight: 700;
    line-height: 140%;
    color: ${theme.colors.fontBlack};
    margin: 0 479px 65px 0;
`

const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    color: ${theme.colors.fontBlack}
`