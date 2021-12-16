import styled from 'styled-components';

export const Container = styled.div`
padding: 0.5rem;
width:100%;
height:fit-content;
display:flex;
flex-direction:column;
gap:0.5rem;

`;
export const ButtonContainer = styled.div`
display:flex;
flex-direction: column;
gap:0.5rem;
`;

// For MenuButton Component
export const ButtonWrapper = styled.div`
width:100%;
padding: 0.3rem 0.5rem;
height: fit-content;
border-radius: 3px;
cursor: pointer;
display:flex;
flex-direction:row;
gap:0.5rem;
transition: 150ms ease-in;
&:hover{
    background-color: rgba(0,0,0,0.065);
}
`;

export const IconWrapper = styled.div`
color: #172b4d;
`;

export const TextWrapper = styled.div``;

export const Title = styled.p`
color:#172b4d;
font-size: 0.875rem;
font-weight: 800;
margin:0;
padding:0;
`;

export const DescriptionText = styled.p`
margin:0;
padding:0;
color: #5e6c84;
font-size: 0.87rem;
`;