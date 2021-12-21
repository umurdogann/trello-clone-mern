import styled from 'styled-components';

export const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:1.5rem;
`;

export const SectionContainer = styled.div`
width:100%;
height:fit-content;
display:flex;
flex-direction: column;
`;

export const SectionHeaderContainer = styled.div`
width:100%;
height:fit-content;
display:flex;
flex-direction:row;
gap:0.5rem;
align-items:center;
justify-content:flex-start;
`;

export const IconWrapper = styled.div`
font-size:1.75rem;
color:#42526e;
`;

export const SectionTitle = styled.div`
width:100%;
height:1.75rem;
font-weight:800;
font-size:1rem;
color:#172b4d;
`;

export const MemberSectionContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:flex-start;
gap:0.5rem;
`;


export const MemberInfoContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
`;

export const MemberName = styled.div`
width:100%;
font-size:1rem;
font-weight:800;
word-wrap:break-word;
color:#172b4d;
`;

export const MemberEmail = styled.div`
width:100%;
font-size:0.875rem;
word-wrap:break-break-word;
color:#5e6c84;
`;

export const DescriptionSectionContainer = styled.div`
width:100%;
padding:0rem 0.2rem;
`;

export const DescriptionInput = styled.textarea`
width:100%;
resize:none;
border-radius:3px;
font-size:0.875rem;
min-height:${props=>props.value?'1.5rem':'5rem'};
${props=>!props.focused&&'max-height: '+props.textHeight+'px'};
padding: ${props=>props.value?'0rem':'0.5rem'};
border:none;
overflow:hidden;
line-height: 1.25rem; 
background-color:${props=>props.focused?'#fff':props.value?'transparent':'rgba(0,0,0,0.045)'};
${props=>props.focused&&'padding: 0.5rem'};
outline-color: transparent;
cursor: pointer;
&:hover{
    background-color: ${props=>props.value?'transparent':'rgba(0,0,0,0.065)'};
}
&::placeholder{
    ${props=>!props.focused&&'color: #000'};
    
}
&:focus{
    padding:0.5rem;
    background-color:white;
    outline-color: #0079bf;
    cursor: text;
    &::placeholder{
        color: #C7CCD4;
    }
}
`;

export const HiddenText = styled.div`
visibility: hidden;
position: absolute;
z-index: 123;
word-wrap:break-word;
width:280px;
top:0;
left:0;
`;