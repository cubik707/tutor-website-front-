import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type SectionTitlePropsType = {
    margin?: string
    color?: "black" | "white"
    textAlign?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    font-size: 36px;
    font-weight: 800;
    line-height: 42px;
    color: ${props => props.color === "white" ? theme.colors.fontWhite : theme.colors.fontBlack || theme.colors.fontBlack};
    margin: ${props => props.margin || "0"};
    text-align: ${props => props.textAlign || "none"};
`