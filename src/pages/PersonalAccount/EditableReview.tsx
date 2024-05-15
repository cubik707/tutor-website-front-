import styled from "styled-components";
import {fetchRemoveReview, ReviewItem} from "../../redux/slices/review.ts";
import {IconButton, Rating} from "@mui/material";
import {useState} from "react";
import {theme} from "../../styles/Theme.ts";
import {EditableSpan} from "../../components/EditableSpan/EditableSpan.tsx";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from "react-redux";

type EditableReviewPropsType = {
    review: ReviewItem
};
export const EditableReview = ({review}: EditableReviewPropsType) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState<number | null>(review.rating);
    const [comment, setComment] = useState(review.comment);
    const changeCommentHandler = (text: string) => {
        setComment(text);
    }

    const onClickDeleteHandler = () => {
        if(window.confirm('Вы действительно хотите удалить отзыв?')){
            // @ts-expect-error: Fetching initial data on component mount
            dispatch(fetchRemoveReview(review._id));
        }
    }
    return (
        <EditableReviewStyled>
            <FlexWrapper justify={'space-between'} align={"center"}>
                <Text>
                    <Accent>Репетитор: </Accent>
                    {review.tutorId.user.fullName}
                </Text>
                <IconButton onClick={onClickDeleteHandler} aria-label="delete" size="large">
                    <DeleteIcon />
                </IconButton>
            </FlexWrapper>

            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(_event, newValue) => {
                    setRating(newValue);
                }}
            />
            <EditableSpan text={comment} changeText={changeCommentHandler}/>
        </EditableReviewStyled>
    );
};

const EditableReviewStyled = styled.div`
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25), 4px 0 10px 0 rgba(0, 0, 0, 0.25);
    background: rgb(255, 255, 255);
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
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