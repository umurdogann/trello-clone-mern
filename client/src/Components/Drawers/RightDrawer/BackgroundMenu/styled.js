import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height: fit-content;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:0.5rem;
`;

export const SubContainer = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:0.3rem;
cursor: pointer;
`;

export const Image = styled.div`
background-image: url(${props=>props.link});
background-color: ${props=>props.bg};
background-position:50%;
background-repeat:no-repeat;
background-size: cover;
width:100%;
height:6rem;
border:0;
text-decoration: none;
outline: none;
border-radius: 0.5rem; 
zoom: 1;
&:hover{
    filter: brightness(1.1);
}
`;

export const Title = styled.div`
font-size: 0.875rem;
display:flex;
align-items:center;
`;

export const PhotosContainer = styled.div`
width:100%;
display:flex;
flex-direction: row;
flex-wrap:wrap;
`;

export const PhotosWrapper = styled.div`
width:50%;
box-sizing: border-box;
padding: 0rem 0.25rem 0.5rem 0.25rem;
cursor: pointer;
&:hover{
    filter: brightness(1.2);
}
`;/*  */