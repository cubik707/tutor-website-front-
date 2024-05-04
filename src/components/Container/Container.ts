import {theme} from "../../styles/Theme.ts";
import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    //outline: 3px solid darkred;
    min-height: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
    
    @media screen and (max-width: 1140px) {
        padding: 0 47px;
    }
    
    section:nth-of-type(odd){
        background-color: ${theme.colors.bgColor};
    }
`