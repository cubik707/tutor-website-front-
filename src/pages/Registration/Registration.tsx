import {Avatar, TextField} from "@mui/material";
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../redux/store.ts";
import {fetchAuth, fetchRegister, selectIsAuth} from "../../redux/slices/auth.ts";
import {useForm} from "react-hook-form";
import {Navigate} from "react-router-dom";

type RegisterType = {
    fullName: string,
    email: string,
    password: string
}

export const Registration = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isAuth = useSelector(selectIsAuth)
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            // isValid,
        },
    } = useForm({
        defaultValues: {
            fullName: '',
            email: '@test.ru',
            password: '12345'
        },
        mode: 'onChange',
    });

    const onSubmit = async (values: RegisterType) => {
        const data = await dispatch(fetchRegister(values));
        if(!data.payload){
            return alert('Не удалось зарегестрироваться!')
        }
        if('token' in data.payload){
            window.localStorage.setItem('token', data.payload.token);
        }
    };

    if(isAuth){
        alert("Вы успешно зарегестрировались!");
        alert("Добро пожаловать!");
        return <Navigate to={'/'}/>
    }

    return (
        <Wrapper>

            <RegistrationStyled>
                <SectionTitle textAlign={"center"}>
                    Создание аккаунта
                </SectionTitle>
                <div>
                    <Avatar sx={{width: 100, height: 100}}/>
                </div>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        error={Boolean(errors.fullName?.message)}
                        helperText={errors.fullName?.message}
                        {...register('fullName', {required: 'Укажите полное имя'})}
                        label="Полное имя"
                        fullWidth/>
                    <TextField
                        error={Boolean(errors.email?.message)}
                        helperText={errors.email?.message}
                        {...register('email', {required: 'Укажите почту'})}
                        type="email"
                        label="E-Mail"
                        fullWidth/>
                    <TextField
                        error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
                        {...register('password', {required: 'Укажите пароль'})}
                        type="password"
                        label="Пароль"
                        fullWidth/>
                    <Button type={"submit"} width={"100%"} title={"Регистрация"} onClick={() => {}}/>
                </StyledForm>
            </RegistrationStyled>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;

    padding: 175px 0 65px 0;
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

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
`