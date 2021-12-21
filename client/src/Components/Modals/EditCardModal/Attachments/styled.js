import styled from 'styled-components';

export const Container = styled.div`
display:flex;
margin-left: 1rem;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: 1rem;
`;

export const RightWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 0.3rem;
width:100%;
height:fit-content;
`;

export const Title = styled.h1`
color: #172b4d;
font-size: 1rem;
font-weight: 800;
`;

export const Row = styled.div`
display:flex;
gap: 1rem;
cursor: pointer;
padding: 1px 0px;
position:relative;
&:hover{
    background-color: #091e420a;
}
`;

export const FaviconWrapper = styled.a`
display:flex;
align-items:center;
border-radius:3px;
justify-content: center;
text-decoration: none;
background-color: rgba(0,0,0,0.03);
color: #42526e;
min-height:5rem;
min-width: 7rem;
`;

export const AttachmentRightWrapper = styled.div`
display: flex;
height: 5rem;
width:100%;
flex-direction: column;
align-items:flex-start;
justify-content:flex-start;
padding-top:1rem;
`;

export const AttachmentTitleWrapper = styled.div`
display:flex;
flex-direction:row;
gap:0.2rem;
align-items:center;
`;

export const AttachmentTitle = styled.h3`
margin:0;
padding:0;
font-size: 0.875rem;
word-wrap: break-word;
font-weight: 700;
color: #172b4d;
`;

export const AttachmentTitleIconWrapper = styled.div`
color: #42526e;
font-size: 0.75rem;
height:1rem;
&:hover{
    color: black;
}
`;

export const AttachmentFooterWrapper = styled.div`
display:flex;
flex-direction: row;
width:100%;
color:#5e6c84;
`;

export const AttachmentDate = styled.div`
display: flex;
flex-direction:row;
width:100%;
font-size: 0.75rem;
gap:0.5rem;
`;

export const AttachmentOperations = styled.p`
margin:0;
padding:0;
font-size: 0.75rem;
display:inline;
height: fit-content;
text-decoration: underline;
position:relative;
z-index : 123;
&:hover{
    color:black;
}
`;
