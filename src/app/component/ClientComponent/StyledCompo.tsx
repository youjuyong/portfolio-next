'use client'

import styled from 'styled-components';

interface content_title_div {
    margintop : string
}
export const Content_Title_Div = styled.div<content_title_div>`
    font-size: 32px;
    color : var(--orange700);
    font-weight: 700;
    padding-left : 10px;
    margin-bottom: 20px;
    border-left : 10px solid var(--orange700); 
    margin-top : ${(props) => props.margintop}
`;
