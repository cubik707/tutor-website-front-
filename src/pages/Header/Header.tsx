import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";
import {Container} from "../../components/Container/Container.ts";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectIsAdmin, selectIsAuth} from "../../redux/slices/auth.ts";
import {AppDispatch} from "../../redux/store.ts";
import {Button} from "../../components/Button/Button.tsx";


export const Header = () => {
    const isAuth = useSelector(selectIsAuth);
    const isAdmin = useSelector(selectIsAdmin);
    const dispatch = useDispatch<AppDispatch>();
    console.log(isAuth)
    const onClickLogout = () => {
        if(window.confirm('Вы действительно хотите выйти?')){
            dispatch(logout());
            window.localStorage.removeItem('token');
        }
    };

    let items = []
    isAuth
        ? isAdmin
            ? items = [
                {label: "Репетиторы", path: "/tutors/choose/:page"},
                {label: "Личный кабинет", path: "/personalAccount"},
            ]
            : items = [
                {label: "Репетиторы", path: "/tutors/choose/:page"},
                {label: "Стать репетитором", path: "/tutors/create"},
                {label: "Личный кабинет", path: "/personalAccount"},
            ]
        : items = [
            {label: "Репетиторы", path: "/tutors/choose/:page"},
            {label: "Стать репетитором", path: "/tutors/create"},
            {label: "Вход", path: "/login"},
            {label: "Регистрация", path: "/register"}
        ]

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo to={"/#"}>tutor</Logo>
                    <HeaderMenu menuItems={items}/>
                    {isAuth
                        ? <Button title={"Выйти"} onClick={onClickLogout}/>
                        : ''
                    }
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.bgColor};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    border-bottom: 1px solid rgb(108, 108, 114);
    padding: 30px 0;
`

const Logo = styled(Link)`
    color: ${theme.colors.fontBlack};
    font-size: 36px;
    font-weight: 700;

    &:hover {
        cursor: pointer;
        transition: 0.2s;
        color: ${theme.colors.btnHover};
    }
`