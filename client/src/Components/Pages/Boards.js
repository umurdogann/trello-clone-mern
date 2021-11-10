import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components";
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';


const Container = styled.div`

  background-image: url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/a651551a5214cb84963366cf9eaacb40/photo-1636207543865-acf3ad382295.jpg");
  background-position: 50%;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top:0;
  left:0;
`;

const Title = styled.h1`
 
`;

const Wrapper = styled.div`
margin-top:3.1rem;
width: 100%;
height: calc(100vh - 3.1rem);
padding: 1rem;
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;
flex-wrap: wrap;
align-content:flex-start;
overflow-y: auto;
`;

const Board = styled.div`
margin: 0 0.8rem 1rem 0.8rem;
width: 200px;
height: 120px;
border-radius: 5px;
background-color: red;
-webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0,0,0,0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
opacity: 88%;
cursor: pointer;
&:hover{
  opacity: 98%;
}
`;

const AddBoard = styled.div``;

const Boards = () => {
  return (
    <>
      <Container>
      <Navbar />
        <Wrapper>
          
        
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          
          <AddBoard />
        </Wrapper>
      </Container>
    </>
  );
};

export default Boards;
