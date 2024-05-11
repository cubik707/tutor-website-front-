import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {theme} from "../../styles/Theme.ts";
import {Link, Route, Routes} from "react-router-dom";
import {Container} from "../../components/Container/Container.ts";
import {MyReviews} from "./MyReviews.tsx";
import {Home} from "./Home.tsx";
import {useSelector} from "react-redux";
import {selectIsAdmin} from "../../redux/slices/auth.ts";
import {TutorControl} from "./TutorControl.tsx";

export const PersonalAccount = () => {
    const isAdmin = useSelector(selectIsAdmin);
    let menuItems = [];
    isAdmin
        ?
        menuItems = [
            {label: "Управление репетиторами", path: "/personalAccount/tutorApplication/:1"},
            {label: "Управление пользователями", path: "/personalAccount/users"},
        ]
        : menuItems = [
            {label: "Мои отзывы", path: "/personalAccount/reviews"},
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
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/reviews'} element={<MyReviews/>}/>
                <Route path={'/tutorApplication/:1'} element={<TutorControl/>}/>
                <Route path={'/users'} element={<MyReviews/>}/>
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

