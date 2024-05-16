import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {theme} from "../../styles/Theme.ts";
import {Link, Route, Routes} from "react-router-dom";
import {Container} from "../../components/Container/Container.ts";
import {MyReviews} from "./MyReviews.tsx";

import {useSelector} from "react-redux";
import {selectIsAdmin} from "../../redux/slices/auth.ts";
import {TutorControl} from "./TutorControl.tsx";
import {UserControl} from "./UserControl.tsx";
import {Settings} from "./Settings.tsx";

export const PersonalAccount = () => {
    const isAdmin = useSelector(selectIsAdmin);
    let menuItems = [];
    isAdmin
        ?
        menuItems = [
            {label: "Управление репетиторами", path: "/personalAccount/tutorApplication/:page"},
            {label: "Управление пользователями", path: "/personalAccount/users/:page"},
            {label: "Настройки", path: "/personalAccount/me"},
        ]
        : menuItems = [
            {label: "Мои отзывы", path: "/personalAccount/reviews"},
            {label: "Настройки", path: "/personalAccount/me"},
        ]
    return (
        <>
            <InfoPanel>
                <Container>
                    <SectionTitle color={"white"} margin={"0 0 20px 0"}>Добро пожаловать в ваш кабинет на
                        tutor.school</SectionTitle>
                    <ul>
                        {menuItems.map((item, index) => {
                            return <li key={index}>
                                <LinkStyled to={item.path}>{item.label}</LinkStyled>
                            </li>
                        })}
                    </ul>
                </Container>
            </InfoPanel>
            <Routes>
                <Route path={'/me'} element={<Settings/>}/>
                <Route path={'/reviews'} element={<MyReviews/>}/>
                <Route path={'/tutorApplication/:page'} element={<TutorControl/>}/>
                <Route path={'/users/:page'} element={<UserControl/>}/>
            </Routes>

        </>
    );
};

const InfoPanel = styled.section`
    padding: 175px 0 65px 0;
    background-color: ${theme.colors.fontBlack};
    ul{
        display: flex;
        gap: 35px;
    }
`

const LinkStyled = styled(Link)`
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: ${theme.colors.fontWhite};

    &:hover {
        color: ${theme.colors.btnHover};
        transition: 0.2s;
    }
`

