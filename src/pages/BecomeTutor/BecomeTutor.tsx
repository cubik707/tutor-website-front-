import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    SelectChangeEvent,
    TextField
} from "@mui/material";
import {Button} from "../../components/Button/Button.tsx";
import styled from "styled-components";
import {useState} from "react";


export const BecomeTutor = () => {
    const [subject, setSubject] = useState('');

    const handleChangeSubject = (event: SelectChangeEvent) => {
        setSubject(event.target.value);
    };

    return (
        <Wrapper>
            <BecomeTutorStyled>
                <SectionTitle textAlign={"center"}>Подать заявку на репетитора</SectionTitle>
                <StyledForm >
                    <Text>Выберите преподаваемые предметы:</Text>
                    <FormGroup >
                        <FormControlLabel control={<Checkbox />} label="Математика" />
                        <FormControlLabel control={<Checkbox />} label="Физика" />
                        <FormControlLabel control={<Checkbox />} label="История" />
                        <FormControlLabel control={<Checkbox />} label="Обществоведение" />
                        <FormControlLabel control={<Checkbox />} label="Химия" />
                        <FormControlLabel control={<Checkbox />} label="Биология" />
                        <FormControlLabel control={<Checkbox />} label="Русский язык" />
                        <FormControlLabel control={<Checkbox />} label="Белорусский язык" />
                    </FormGroup>
                    <TextField
                        label="Цена за час"
                        // error={Boolean(errors.email?.message)}
                        // helperText={errors.email?.message}
                        // {...register('email', {required: 'Укажите почту'})}
                        fullWidth />
                    <TextField
                        label="Место пребывания"
                        fullWidth />
                    <TextField
                        label="Квалификация"
                        fullWidth />
                    <TextField
                        label="Дополнительная информация"
                        multiline
                        rows={4}
                    />
                    <Button type={"submit"} width={"100%"} title={"Подать заявку"} onClick={()=> {}}/>
                </StyledForm>
            </BecomeTutorStyled>
        </Wrapper>
    );
};

const BecomeTutorStyled = styled.div`
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25), 4px 0 10px 0 rgba(0, 0, 0, 0.25);
    background: rgb(255, 255, 255);
    padding:  50px;
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const Wrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 175px 0 65px 0;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const Text = styled.span`
    font-size: 18px;
    font-weight: 400;
`
