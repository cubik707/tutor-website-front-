import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";
import {Avatar, Rating} from "@mui/material";

type ReviewPropsType = {
    rating: number,
    tutorName: string
    userName: string
    comment?: string
}


export const Review = ({rating, comment, userName, tutorName}:ReviewPropsType) => {

    return (
        <ReviewStyled>
            <FlexWrapper gap={"35px"}>
                <FlexWrapper align={"center"} direction={"column"} gap={"33px"}>
                    <Avatar sx={{width:115, height: 115}}></Avatar>
                    <Rating name="read-only" value={rating} readOnly/>
                </FlexWrapper>
                <FlexWrapper direction={"column"} justify={"space-between"}>
                    <TutorName>Репетитор: {tutorName}</TutorName>
                    <FlexWrapper gap={"5px"} direction={"column"}>
                        <Comment>{comment}</Comment>
                        <UserName>{userName}</UserName>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </ReviewStyled>
    );
};

const ReviewStyled = styled.div`
    max-width: 565px;
    width: 100%;
`

const TutorName = styled.span`
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    color: ${theme.colors.fontBlack};
`

const Comment = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: ${theme.colors.fontGray};
    margin-bottom: 10px;
`

const UserName = styled.span`
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: ${theme.colors.fontGray};
`