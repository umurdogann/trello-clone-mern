import styled from "styled-components"

export const Container = styled.div`
background-color: #fff;
-webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  
width:100%;
/* overflow-x:hidden;
overflow-y:hidden; */
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding:0.3rem 0.3rem;
border-radius:3px;
color:black;
gap:0.3rem;
cursor:pointer;
&:hover{
    background-color: rgba(255,255,255,0.5);
}
`;

export const LabelContainer = styled.div`
width: 100%;
display:flex;
flex-wrap:wrap;
gap:0.2rem;
`;

export const Label = styled.div`
width:2.5rem;
height:0.5rem;
background-color: darkgreen;
border-radius: 2rem;
`;

export const CardTitle = styled.div`

`;

export const FooterContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction:row;
flex-wrap: wrap;
width: 100%;
height: fit-content;

`;
export const IconGroupContainer = styled.div`
flex:3;
display: inline-block;
min-width: fit-content;
margin-bottom:0.3rem;
`;
export const IconGroupWrapper = styled.div`

display: flex;
width: 100%;
flex-flow: row wrap;
width:fit-content;
align-items:center;
justify-content: flex-start;
color: #5e6c84;
gap: 0.7rem;

`;

export const IconWrapper = styled.div`
margin-right: 4px;
display:flex;
align-items: center;
`;

export const DateContainer = styled.div`
display:flex;
flex-flow:row wrap;
align-items:center;
padding: 0.1rem 0.3rem;
border-radius: 3px;
gap:0.2rem;
background-color:#ec9488;
cursor:pointer;
color:white;
&:hover{
    background-color:#eb5a46;
}
`;

export const Span = styled.div`
font-size: 0.75rem;
`;

export const CommentContainer = styled.div`
display:flex;
flex-flow: row-wrap;
gap:0.2rem;
align-items:center;

`;

export const CheckContainer = styled.div`
display:flex;
flex-flow:row-wrap;
gap:0.2rem;
align-items:center;
`;

export const MembersContainer = styled.div`
flex:1;
display: inline-block;
width:100%;
`;

export const MembersWrapper = styled.div`
display:flex;
align-items: center;
justify-content: flex-end;
gap:0.2rem;
`;

export const MemberAvatar = styled.div`
background-color: darkblue;
opacity: 80%;
border-radius: 25rem;
height:1.75rem;
width:1.75rem;
display:flex;
justify-content: center;
align-items: center;
color: white;
font-weight: 600;
font-size: 0.85rem;
cursor: pointer;
transition: 150ms ease-in;
&:hover{
    opacity: 60%;
}
`;