import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

type HeaderMenuPropsType = {
    menuItems: Array<string>
};
export const HeaderMenu = ({menuItems}: HeaderMenuPropsType) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {menuItems.map((item, index)=>{
                    return <li key={index}>
                        <Link href ="">
                            {item}
                        </Link>
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

const Link = styled.a`
    font-size: 14px;
    font-weight: 700;
    &:hover{
        color: ${theme.colors.btnHover};
        transition: 0.2s;
    }
`