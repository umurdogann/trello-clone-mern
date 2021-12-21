import styled from "styled-components";
import { InviteButton } from "../TopBar/styled";
export const Row = styled.div `
display:flex;
flex-direction:row;
align-items: center;
justify-content: flex-start;
width: 100%;
gap:0.3rem;
color: #6a6a6a;
`;

export const AddListButton = styled(InviteButton)`
display:inline;
width: 6rem;
margin-left: -2px;
`;

export const IconWrapper = styled.div`    
    display: flex;
    align-items: center;
    cursor:pointer;
    &:hover{
        color:black;
    }
`;