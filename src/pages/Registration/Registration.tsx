import {Avatar, TextField} from "@mui/material";
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {Button} from "../../components/Button/Button.tsx";


export const Registration = () => {
    return (
        <Wrapper>

            <RegistrationStyled>
                <SectionTitle textAlign={"center"}>
                    Создание аккаунта
                </SectionTitle>
                <div>
                    <Avatar sx={{width: 100, height: 100}}/>
                </div>
                <TextField label="Полное имя" fullWidth/>
                <TextField label="E-Mail" fullWidth/>
                <TextField label="Пароль" fullWidth/>
                <Button width={"100%"} title={"Регистрация"} onClick={() => {
                }}/>

            </RegistrationStyled>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RegistrationStyled = styled.div`
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25), 4px 0 10px 0 rgba(0, 0, 0, 0.25);
    background: rgb(255, 255, 255);
    padding: 50px;
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
`