import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type ButtonPropsType = {
    title: string | undefined
    onClick?:() => void
    width?: string
    height?: string
    type?: "button" | "submit" | "reset" | undefined
}

export const Button = ({title, onClick, width, height, type}: ButtonPropsType) => {
    return (
        <ButtonStyled type={type} height={height} width={width} onClick={onClick}>{title}</ButtonStyled>
    )
}

type StyledButtonPropsType = {
    width?: string
    height?: string
}

const ButtonStyled = styled.button<StyledButtonPropsType>`
    width: ${props => props.width || "100px"};
    height: ${props => props.height || "50px"};
    background-color: ${theme.colors.fontBlack};
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    color: ${theme.colors.fontWhite};
    &:hover{
        background-color: ${theme.colors.btnHover};
        transition: 0.2s;
        cursor: pointer;
    }
    
`
