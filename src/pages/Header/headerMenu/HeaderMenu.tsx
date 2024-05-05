import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Link} from "react-router-dom"

type MenuItem = {
    label: string;
    path: string;
};

type HeaderMenuPropsType = {
    menuItems: Array<MenuItem>;
};
export const HeaderMenu = ({menuItems}: HeaderMenuPropsType) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {menuItems.map((item, index)=>{
                    return <li key={index}>
                        <LinkStyled to={item.path}>{item.label}</LinkStyled>
                    </li>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }

    display: flex;
    align-items: center;
    text-transform: uppercase;
`

const LinkStyled = styled(Link)`
    font-size: 14px;
    font-weight: 700;
    &:hover{
        color: ${theme.colors.btnHover};
        transition: 0.2s;
    }
`