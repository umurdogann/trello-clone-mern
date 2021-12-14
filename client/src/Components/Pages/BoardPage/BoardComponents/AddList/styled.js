import styled, { keyframes } from "styled-components";
import { Button } from "../../CommonStyled";

export const AddAnotherListContainer = styled.div`
  display: flex;
  flex-direction: column;  
  flex-wrap: wrap;
  overflow-y: auto;
  min-width: 16rem;
  align-items: center;
  background-color: ${props => props.show ? "#ebecf0" : "transparent"};
  color: white;
  height:fit-content;  
  margin-left:0.2rem;
  gap: 0.3rem;
  border-radius: 3px;
  cursor: pointer;
  transition: 250ms ease;
`;

export const AddAnotherListButton = styled(Button)`
width: 100%;
display: ${props => !props.show ? "flex" : "none"};
`;

const slideAnimation = keyframes`
 0% { height: 0rem; width: 100%; overflow: hidden; }
 25% { height: 1rem; width: 100%;  overflow: hidden;}
 50% { height: 2rem; width: 100%;  overflow: hidden;}
 75% { height: 3rem; width: 100%; overflow: hidden;}
 100% { height: 4rem; width: 100%;  overflow: hidden;}
`

export const AddListContainer = styled(AddAnotherListContainer)`
flex-direction: column;
display: ${props =>props.show ? "flex" : "none"};
animation-name: ${props=> props.show && slideAnimation};
animation-duration:200ms;
animation-iteration-count: 1;
padding: 0.5rem;
gap:0.3rem;

`;

export const AddListWrapper = styled.div `
width:100%;
display: flex;
flex-direction: column;
gap:0.3rem;
`;
export const ListTitleInput = styled.input`
width: 100%;
padding: 0.25rem 0.5rem;
border-radius:2px;
border:none;
outline: 2px solid #0079bf;
display:flex;
justify-content: flex-start;
display:inline;
&:focus{
  
}
`;