import Navbar from "../../Navbar";
import React, { useState } from "react";
import TopBar from "./BoardComponents/TopBar/TopBar";
import * as style from "./Styled";
import AddList from "./BoardComponents/AddList/AddList";
import List from "./BoardComponents/List/List";
const Board = (props) => {
  /* props.match.params.id */
  const [boardName, setBoardName] = useState("Hello World!");  
  return (
    <>
    
      <Navbar />
      <style.Container>
        <TopBar boardName={boardName} callback={setBoardName}/>
        <style.ListContainer>
          <List/>
            <AddList/>
        </style.ListContainer>
      </style.Container>
  
    </>
  );
};

export default Board;
