import Navbar from "../../Navbar";
import React, { useEffect, useState } from "react";
import TopBar from "./BoardComponents/TopBar/TopBar";
import * as style from "./Styled";
import AddList from "./BoardComponents/AddList/AddList";
import List from "./BoardComponents/List/List";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../../../Services/boardsService";
import { getLists } from "../../../Services/boardService";
import LoadingScreen from "../../LoadingScreen";


const Board = (props) => {
  /* props.match.params.id */
  const dispatch = useDispatch();
  const {backgroundImageLink, loading} = useSelector(state=> state.board);
  const {allLists, loadingListService } = useSelector(state=> state.list);
  const boardId = props.match.params.id;

  useEffect(()=>{  
  getBoard(props.match.params.id,dispatch);
  getLists(boardId,dispatch);
  },[props.match.params.id, dispatch, boardId])

  return (
    <>
      {(loading || loadingListService ) && <LoadingScreen/>}
      <Navbar />
      <style.Container backgroundImg={backgroundImageLink.split('?')[0]}>
        <TopBar/>
        <style.ListContainer>
          {!loading  && allLists.map(list=>{
            return <List key={list._id} info={list}/>
          })}
            <AddList boardId={boardId}/>
        </style.ListContainer>
      </style.Container>
  
    </>
  );
};

export default Board;
