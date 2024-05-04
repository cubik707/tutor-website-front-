import styled from "styled-components";
import {Container} from "@mui/material";
import {theme} from "../../styles/Theme.ts";

export const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <Logo href={"#"}>tutor</Logo>
                <ul>
                    <li><a href={"#"}>О нас</a></li>
                    <li><a href={"#"}>Помощь</a></li>
                    <li><a href={"#"}>Вопросы и ответы</a></li>
                    <li><a href={"#"}>Блог</a></li>
                    <li><a href={"#"}>Зарегистрироваться репетитором</a></li>
                    <li><a href={"#"}>Вакансии для репетиторов</a></li>
                </ul>
                <small>© 2024 — Все права защищены</small>
            </Container>
        </FooterStyled>
    );
};

const FooterStyled = styled.footer`
    padding: 65px 0;
    background-color: ${theme.colors.fontBlack};
    color: ${theme.colors.fontGray};
    font-size: 18px;
    font-weight: 400;
    
    small{
        font-size: 18px;
    }

    ul{
        li>a{
            color: ${theme.colors.fontGray};
            &:hover{
                color:${theme.colors.fontWhite};
                transition: 0.2s;
            }
        }
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Разделение на три столбца */
        grid-gap: 13px;
        margin: 45px 0;
        
    }
`

const Logo = styled.a`
    color: ${theme.colors.fontWhite};
    font-size: 36px;
    font-weight: 700;
    &:hover{
        cursor: pointer;
        transition: 0.2s;
        color: ${theme.colors.btnHover};
    }
`