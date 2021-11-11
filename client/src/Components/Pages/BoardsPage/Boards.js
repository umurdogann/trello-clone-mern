import LoadingScreen from "../../LoadingScreen";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../../../Services/boardsService";
import Navbar from "../../Navbar";
import { Container, Wrapper, Title, Board, AddBoard } from "./Styled";
import CreateBoard from "../../Modals/CreateBoardModal/CreateBoard";

const Boards = () => {
  const dispatch = useDispatch();
  const { pending, boardsData } = useSelector((state) => state.boards);
  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = ()=>{
    setOpenModal(false);
  }

  useEffect(() => {
    getBoards(dispatch);
  }, [dispatch]);

  return (
    <>
      {pending && <LoadingScreen/>}
      <Container>
        <Navbar />
        <Wrapper>
          <Title>YOUR WORKSPACES</Title>
          {!pending && boardsData.map(item=>{
            return <Board key={item._id} bgColor={item.color}>{item.title}</Board>
          })}
          {!pending && <AddBoard onClick={()=>setOpenModal(true)}>Create new board</AddBoard>}
          {openModal && <CreateBoard callback={handleModalClose}/>}
        </Wrapper>
      </Container>
    </>
  );
};

export default Boards;
