import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";
import {Container} from "../../components/Container/Container.ts";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";

const items = ["Репетиторы", "Страть репетитором", "Вход"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo>tutor</Logo>
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
`

const Logo = styled.a`
    color: ${theme.colors.fontBlack};
    font-size: 36px;
    font-weight: 700;
    &:hover{
        cursor: pointer;
        transition: 0.2s;
        color: ${theme.colors.btnHover};
    }
`