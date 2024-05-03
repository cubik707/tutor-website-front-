import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type SectionTitlePropsType = {
    margin?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    font-size: 36px;
    font-weight: 800;
    line-height: 42px;
    color: ${theme.colors.fontBlack};
    margin: ${props => props.margin || "0"};
`