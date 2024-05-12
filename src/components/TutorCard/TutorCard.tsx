import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {Avatar} from "@mui/material";
import {FlexWrapper} from "../FlexWrapper/FlexWrapper.tsx";

type TutorCardPropsType = {
    description?: string
    tutorName: string
    subject: Array<string>
    qualification?: string
};
export const TutorCard = ({
                              description,
                              tutorName,
                              subject,
                              qualification,
                              }: TutorCardPropsType) => {
    return (
        <TutorCardStyled>
            <FlexWrapper direction={"column"}>
                <TutorName>{tutorName}</TutorName>
                <span>
                    <Accent>Предметы: </Accent>
                    {subject.map((item, index) => (
                        <SubjectItem key={index}>{item}{index !== subject.length - 1 && ', '}</SubjectItem>
                    ))}
                </span>
                {qualification ? <Info>{qualification}</Info> : ""}
            </FlexWrapper>
            <FlexWrapper gap={"25px"} margin={"45px 0 0 0"}>
                <Avatar sx={{width: 130, height: 130}}></Avatar>
                <Text>{description}</Text>
            </FlexWrapper>

        </TutorCardStyled>
    );
};

const TutorCardStyled = styled.div`
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25), 4px 0 10px 0 rgba(0, 0, 0, 0.25);
    background: rgb(255, 255, 255);
    max-width: 725px;
    width: 100%;
    padding: 50px 30px 45px 30px;
`

const TutorName = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    color: ${theme.colors.fontBlack};
    text-transform: uppercase;
`

const Accent = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    text-transform: uppercase;
    color: rgb(108, 108, 114);
`

const SubjectItem = styled.span`
    font-size: 14px;
    font-weight: 300;
    line-height: 28px;
    text-transform: uppercase;
    color: ${theme.colors.fontBlack}
`

const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: ${theme.colors.fontGray}
`

const Info = styled.span`
    font-size: 14px;
    font-weight: 300;
    line-height: 28px;
    text-transform: uppercase;
    color: ${theme.colors.fontBlack}
`