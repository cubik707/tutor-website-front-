import styled from "styled-components";
import {Container} from "../../../components/Container/Container.ts";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle.tsx";
import {theme} from "../../../styles/Theme.ts";


export const WhyTutor = () => {
    return (
        <WhyTutorStyled>
            <Container>
                <SectionTitle margin={"0 728px 72px 0"}>
                    Почему стоит учиться с tutor
                </SectionTitle>
                <ol>
                    <ListItem>
                        <Title>Опытные репетиторы</Title>
                        <Text>Мы проверяем профессиональные качества каждого репетитора, перед тем как разместить его анкету</Text>
                    </ListItem>
                    <ListItem>
                        <Title>Безопасное общение</Title>
                        <Text>После регистрации вы можете пообщаться напрямую и оценить компетентность репетитора</Text>
                    </ListItem>
                    <ListItem>
                        <Title>Бесплатный пробный урок</Title>
                        <Text>Вы можете зарезервировать пробный урок перед тем, как принять решение обучаться</Text>
                    </ListItem>
                </ol>
            </Container>
        </WhyTutorStyled>
    );
};

const WhyTutorStyled = styled.section`
    padding: 160px 0;
    ol{
        display: flex;
        gap: 70px;
        justify-content: space-between;
        counter-reset: my-counter;
        list-style-type: none;
        position: relative;
        
        li:before{
            margin-left: 95px;
            position: absolute;
            z-index: -1;
            top: -75px;
            
            content: counter(my-counter); 
            counter-increment: my-counter;
            font-size: 288px;
            font-weight: 800;
            line-height: 100%;
            color: #EDEDED;
        }
    }
`

const ListItem = styled.li`
    max-width: 360px;
    width: 100%;
`

const Title = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    color: ${theme.colors.fontBlack};
    text-transform: uppercase;
`

const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: ${theme.colors.fontGray};
    
    margin-top: 45px;
`