import styled from "styled-components";
import {Container} from "../../components/Container/Container.ts";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {Box, Rating, TextField} from "@mui/material";
import {Button} from "../../components/Button/Button.tsx";
import {useState} from "react";

type ReviewFormPropsType = {
    tutorId: string | undefined
}

export const ReviewForm = ({tutorId}: ReviewFormPropsType ) => {
    const [value, setValue] = useState<number | null>(0);
    console.log(tutorId)
    return (
        <Block>
            <Container>
                <ReviewFormStyled>
                    <SectionTitle>Оставьте отзыв</SectionTitle>
                    <Rating
                        name="rating"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            console.log(event);
                        }}
                    />
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 0, width: '500px' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="comment-field"
                            label="Ваш комментарий"
                            multiline
                            rows={4}
                        />
                    </Box>
                    <Button width={"200px"} title={"Отправить отзыв"} onClick={()=>{}}/>
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