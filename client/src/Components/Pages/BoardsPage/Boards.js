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
  const [searchString, setSearchString] = useState('');
  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleClick = (e) => {
   history.push(`/board/${e.target.id}`)
  }

  useEffect(() => {
    getBoards(false,dispatch);
  }, [dispatch]);

  useEffect(() => {
    document.title = "Boards | Trello Clone"
  }, [])

  return (
    <>
      {pending && <LoadingScreen />}
      <Container>        
        <Navbar searchString={searchString} setSearchString={setSearchString} />
        <Wrapper>
          <Title>Your Boards</Title>
          {!pending &&
            boardsData.length>0 &&
            boardsData.filter(item=>searchString?item.title.toLowerCase().includes(searchString.toLowerCase()):true).map((item) => {
              return (
                <Board key={item._id} link={item.backgroundImageLink} isImage={item.isImage} id={item._id} onClick={(e)=>handleClick(e)}>
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
