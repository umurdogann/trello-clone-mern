import React from "react";
import Navbar from "../../Navbar";
import {Container,Wrapper,Title,Board,AddBoard} from "./Styled";

const Boards = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Wrapper>
          <Title>YOUR WORKSPACES</Title>
          <Board>
            <p>Any element</p>
          </Board>
          <AddBoard>Create new board</AddBoard>
        </Wrapper>
      </Container>
    </>
  );
};

export default Boards;
