import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height: fit-content;
display:flex;
flex-direction: column;
gap:0.5rem;
max-width:260px;
`;

export const SearchContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:flex-start;
gap:0.3rem;
`;

export const SearchBar = styled.input`
border:none;
outline:2px solid transparent;
border-radius:3px;
background-color: rgba(0,0,0,0.035);
padding: 0.3rem;
font-size:1rem;
width:100%;
flex:3;
transition: 150ms ease-in;
&:hover{
    background-color: rgba(0,0,0,0.065);
}
&:focus{
    background-color:white;
    color:black;
    outline: 2px solid #0079bf;
}
`;

export const ChipContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
flex-wrap:wrap;
gap:0.3rem;
`;
