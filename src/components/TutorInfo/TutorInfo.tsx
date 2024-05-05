import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {FlexWrapper} from "../FlexWrapper/FlexWrapper.tsx";
import {Button} from "../Button/Button.tsx";

type TutorInfoPropsType = {
    rating: number
    pricePerHour: number
    experience: string
    reviewsCount: number
};
export const TutorInfo = ({rating, reviewsCount, experience, pricePerHour}: TutorInfoPropsType) => {
    return (
        <TutorInfoStyled>
            <FlexWrapper direction={"column"} gap={"10px"} margin={"0 0 30px 0"}>
                <FlexWrapper gap={"5px"}>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                            fill="#6C6C72"/>
                    </svg>
                    <TextBold>{rating}</TextBold>
                </FlexWrapper>

                <TextBold>{pricePerHour} р/час</TextBold>
                <Text>
                    <Accent>Опыт работы: </Accent>
                    {experience}
                </Text>
                <Text>
                    <Accent>Отзывы: </Accent>
                    {reviewsCount}
                </Text>
            </FlexWrapper>
            <FlexWrapper>
                <Button width={"389px"} height={"50px"} title={"Перейти к профилю"} onClick={() => {
                }}/>
            </FlexWrapper>
        </TutorInfoStyled>
    );
};

const TutorInfoStyled = styled.div`
    padding: 50px 20px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25), 4px 0 10px 0 rgba(0, 0, 0, 0.25);
    background: rgb(255, 255, 255);
    position: relative;
    svg{
        position: absolute;
        top: 53px;
        left: 35px;
    }
`

const TextBold = styled.span`
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    text-transform: uppercase;
    color: ${theme.colors.fontBlack}
`

const Accent = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    text-transform: uppercase;
    color: rgb(108, 108, 114);
`

const Text = styled.span`
    font-size: 14px;
    font-weight: 300;
    line-height: 28px;
    text-transform: uppercase;
    color: ${theme.colors.fontBlack};
`

