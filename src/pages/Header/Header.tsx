import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";
import {Container} from "../../components/Container/Container.ts";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {Link} from "react-router-dom";

const items = [
    { label: "Репетиторы", path: "/tutors" },
    { label: "Стать репетитором", path: "/become-tutor" },
    { label: "Вход", path: "/login" },
    { label: "Регистрация", path: "/register" }
];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo to={"/#"}>tutor</Logo>
                    <HeaderMenu menuItems={items}/>
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
    &:hover{
        cursor: pointer;
        transition: 0.2s;
        color: ${theme.colors.btnHover};
    }
`