import LoadingScreen from "../../LoadingScreen";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../../../Services/boardsService";
import Navbar from "../../Navbar";
import { Container, Wrapper, Title, Board, AddBoard } from "./Styled";

const Boards = () => {
  const dispatch = useDispatch();
  const { pending, boardsData } = useSelector((state) => state.boards);

  useEffect(() => {
    getBoards(dispatch);
  }, [dispatch]);

  return (
    <>
      {pending && <LoadingScreen />}
      <Container>
        <Navbar />
        <Wrapper>
          <Title>YOUR WORKSPACES</Title>
          {!pending && boardsData.map(item=>{
            return <Board key={item._id} bgColor={item.color}>{item.title}</Board>
          })}
          <AddBoard>Create new board</AddBoard>
        </Wrapper>
      </Container>
    </>
  );
};

export default Boards;
