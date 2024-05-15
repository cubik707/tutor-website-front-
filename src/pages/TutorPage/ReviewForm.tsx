import styled from "styled-components";
import {Container} from "../../components/Container/Container.ts";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {Box, Rating, TextField} from "@mui/material";
import {Button} from "../../components/Button/Button.tsx";
import {ChangeEvent, useState} from "react";
import axios from "../../axios.ts";
import {useNavigate} from "react-router-dom";
import {EditableSpan} from "../../components/EditableSpan/EditableSpan.tsx";

type ReviewFormPropsType = {
    tutorId: string | undefined
}

export const ReviewForm = ({tutorId}: ReviewFormPropsType) => {
    const navigate = useNavigate();
    const [rating, setRating] = useState<number | null>(0);
    const [comment, setComment] = useState();
    const [, setLoading] = useState(false)
    console.log(tutorId)

    const onSubmit = async () => {
        try {
            setLoading(true);
            if (rating === 0 || tutorId === undefined) {
                throw new Error('Неверные данные для отправки');
            }

            const fields = {
                rating,
                comment,
                tutorId,
            }

            const {data} = await axios.post('/reviews', fields)
            if(data.payload){
                alert('Отзыв успешно отправлен!');
                navigate('/tutors/${tutorId}');
            }
        } catch (err) {
            console.warn(err);
            alert('Ошибка при создании отзыва!');
            setLoading(false);
        }
    }

    return (
        <Block>
            <Container>
                <ReviewFormStyled>
                    <SectionTitle>Оставьте отзыв</SectionTitle>
                    <Rating
                        name="rating"
                        value={rating}
                        onChange={(event, newRating) => {
                            setRating(newRating);
                            console.log(event);
                        }}
                    />
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m: 0, width: '500px'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <EditableSpan/>
                    </Box>
                    <Button width={"200px"} title={"Отправить отзыв"} onClick={onSubmit}/>
                </ReviewFormStyled>
            </Container>
        </Block>

    );
};

const Block = styled.section`
    padding: 65px 0;
`

const ReviewFormStyled = styled.form`
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25), 4px 0 10px 0 rgba(0, 0, 0, 0.25);
    background: rgb(255, 255, 255);
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    //align-items: center;
`