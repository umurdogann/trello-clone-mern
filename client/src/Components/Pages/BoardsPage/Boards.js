import LoadingScreen from "../../LoadingScreen";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../../../Services/boardsService";
import Navbar from "../../Navbar";
import { Container, Wrapper, Title, Board, AddBoard } from "./Styled";
import CreateBoard from "../../Modals/CreateBoardModal/CreateBoard";
import { useHistory } from "react-router";

const Boards = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pending, boardsData } = useSelector((state) => state.boards);
  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleClick = (e) => {
   history.push(`/board/${e.target.id}`)
  }

  useEffect(() => {
    getBoards(dispatch);
  }, [dispatch]);

  return (
    <>
      {pending && <LoadingScreen />}
      <Container>        
        <Navbar />
        <Wrapper>
          <Title>Your Boards</Title>
          {!pending &&
            boardsData.length>0 &&
            boardsData.map((item) => {
              return (
                <Board key={item._id} link={item.backgroundImageLink} id={item._id} onClick={(e)=>handleClick(e)}>
                  {item.title}
                </Board>
              );
            })}
          {!pending && (
            <AddBoard onClick={() => setOpenModal(true)}>
              Create new board
            </AddBoard>
          )}
          {openModal && <CreateBoard callback={handleModalClose} />}
        </Wrapper>
      </Container>
    </>
  );
};

export default Boards;
