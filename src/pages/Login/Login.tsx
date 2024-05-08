import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {TextField} from "@mui/material";
import {Button} from "../../components/Button/Button.tsx";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../redux/store.ts";
import {fetchAuth, selectIsAuth} from "../../redux/slices/auth.ts";
import {Navigate} from "react-router-dom";

type LoginType = {
    email: string,
    password: string
}

export const Login = () => {
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
            email: '',
            password: ''
        },
        mode: 'onChange',
    });

    const onSubmit = async (values: LoginType) => {
      const data = await dispatch(fetchAuth(values));
      if(!data.payload){
          return alert('Не удалось авторизоваться!')
      }
      if('token' in data.payload){
          window.localStorage.setItem('token', data.payload.token);
      }
    };

    if(isAuth){
        alert("Вы успешно авторизировались!");
        return <Navigate to={'/'}/>
    }

    return (
        <Wrapper>
            <LoginStyled>
                <SectionTitle textAlign={"center"}>Вход в аккаунт</SectionTitle>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="E-Mail"
                        error={Boolean(errors.email?.message)}
                        helperText={errors.email?.message}
                        {...register('email', {required: 'Укажите почту'})}
                        type="email"
                        fullWidth />
                    <TextField
                        label="Пароль"
                        error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
                        {...register('password', {required: 'Укажите пароль'})}
                        type="password"
                        fullWidth />
                    <Button type={"submit"} width={"100%"} title={"Войти"} onClick={()=> {}}/>
                </StyledForm>
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

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
`