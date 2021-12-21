import styled from 'styled-components';
import { Title} from '../Labels/styled';

export const Container = styled.div`
height: fit-content;
width:14rem;
display: flex;
flex-direction: column;
gap: 1rem;
`;

export const DateRangeWrapper = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:center;
`;

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
gap:0.5rem;
`;

export const Row = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content: flex-start;
gap: 0.5rem;
margin-top: -0.4rem;
`;

export const DateInput = styled.input`
height: 1.85rem;
width: 40%;
border: ${props=>props.focus?'2px solid #0079bf':'2px solid lightgray'};
outline: none;
border-radius: 3px;
font-size: 0.875rem;
padding: 0.3rem 0rem 0.3rem 0.3rem;
cursor: text;
background-color:${props=>props.focus?'#fff':'#fafbfc'};
&::-webkit-inner-spin-button,
&::-webkit-calendar-picker-indicator {
    display: none;    
    -webkit-appearance: none;
}
&:hover{
    background-color:${props=>props.focus?undefined:'#ebecf0'};
}
&:read-only{
    cursor: not-allowed;
    background-color: #EBECF0;
    border-color: #EBECF0;
    color: #b4bac5;
}
`;

export const DateTitle = styled(Title)`
color : ${props=>props.focus? '#0079BF':'#5e6c84'};
`;

export const SaveButton = styled.button`
margin-top: 1rem;
background-color: #0079b0;
color: #fff;
border-radius: 3px;
border:none;
cursor: pointer;
padding: 0.375rem;
&:hover{
    background-color: #026aa7;
}
&:active{
    background-color: #055a8c
}
`;


