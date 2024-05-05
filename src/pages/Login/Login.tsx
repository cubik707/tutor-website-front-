import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {TextField} from "@mui/material";
import {Button} from "../../components/Button/Button.tsx";

export const Login = () => {
    return (
        <Wrapper>
            <LoginStyled>
                <SectionTitle textAlign={"center"}>Вход в аккаунт</SectionTitle>
                <TextField label="E-Mail" fullWidth />
                <TextField label="Пароль" fullWidth />
                <Button width={"100%"} title={"Войти"} onClick={()=> {}}/>
            </LoginStyled>
        </Wrapper>

    );
};

const LoginStyled = styled.div`
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25), 4px 0 10px 0 rgba(0, 0, 0, 0.25);
    background: rgb(255, 255, 255);
    padding:  50px;
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 175px 0 65px 0;
`