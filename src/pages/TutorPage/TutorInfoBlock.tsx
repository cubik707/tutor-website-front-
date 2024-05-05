import {Container} from "../../components/Container/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";
import {TutorCard} from "../../components/TutorCard/TutorCard.tsx";
import {TutorInfo} from "../../components/TutorInfo/TutorInfo.tsx";
import {ReviewAboutTutor} from "../../components/ReviewAboutTutor/ReviewAboutTutor.tsx";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {ReactNode} from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type TutorInfoBlockPropsType = {
    reviewItems: Array<ReactNode>
};
export const TutorInfoBlock = ({reviewItems}: TutorInfoBlockPropsType) => {
    const education = [
        { date: "1988 — 1993", institution: "Белорусский государственный университет" }
    ];

    const experience = [
        { date: "2017 — настоящее время", position: "преподаватель", institution: "Белорусский государственный университет" },
        { date: "2017 — настоящее время", position: "преподаватель", institution: "Белорусский государственный университет" }
    ];
    return (
        <TutorInfoBlockStyled>
                <Container>
                    <FlexWrapper justify={"space-between"}>
                        <TutorCard tutorName={"Станислав Борисов"}
                                   subject={["Матемитика", "Физика"]}
                                   qualification={"Кандидат наук"}
                                   description={"Преподаватель ВУЗа с 17-летним опытом работы Математика (программа средней школы, высшая математика), математический анализ, внешнее независимое оценивание, подготовка к экзаменам (зачетам, контрольным работам и др. )"}/>
                        <TutorInfo btnTitle={"Оставить отзыв"}
                                   onClickHandler={()=>{}}
                                   rating={5}
                                   experience={"5 лет"}
                                   pricePerHour={20}
                                   reviewsCount={12} />
                    </FlexWrapper>
                    <ReviewAboutTutor reviewItems={reviewItems} title={"Отзывы о репетиторе"}/>
                    <ResumeBlock>
                        <SectionTitle margin={"0 0 45px 0"}>Резюме</SectionTitle>
                        <FlexWrapper gap={"125px"} justify={"space-between"}>
                            <FlexWrapper direction={"column"} gap={"25px"}>
                                <Title>Образование</Title>
                                {education.map((eduItem, index) => (
                                    <FlexWrapper key={index} gap={"65px"}>
                                        <DateText>{eduItem.date}</DateText>
                                        <Text>{eduItem.institution}</Text>
                                    </FlexWrapper>
                                ))}
                            </FlexWrapper>
                            <FlexWrapper direction={"column"} gap={"25px"}>
                                <Title>Опыт работы</Title>
                                {experience.map((expItem, index) => (
                                    <FlexWrapper key={index} gap={"65px"}>
                                        <DateText>{expItem.date}</DateText>
                                        <Text>{`${expItem.institution}: ${expItem.position}`}</Text>
                                    </FlexWrapper>
                                ))}
                            </FlexWrapper>
                        </FlexWrapper>
                    </ResumeBlock>
                </Container>
        </TutorInfoBlockStyled>
    );
};

const TutorInfoBlockStyled = styled.section`
    padding: 65px 0;
`

const ResumeBlock = styled.section`

`

const Title = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    text-transform: uppercase;
    color: ${theme.colors.fontBlack};
`
const DateText = styled.span`
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: ${theme.colors.fontGray};
`

const Text = styled.span`
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: ${theme.colors.fontGray};
`