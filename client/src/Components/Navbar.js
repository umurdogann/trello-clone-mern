import React, { useEffect } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";
import { xs } from "../BreakPoints";
import ProfileBox from "./ProfileBox";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBoards } from "../Services/boardsService";
const Container = styled.div`
  height: 3rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(24px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  ${xs({
    padding: "0.5rem, 0rem",
  })}
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  ${xs({
    gap: "0.1rem",
    width: "fit-content",
  })}
`;

const RightSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

/* const UserProfile = styled.div`
    background-color:green;
    color: white;
    font-weight:600;
    box-sizing: border-box;
    border:4px solid rgba(255,255,255,0.1);    
    height:2.1rem;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    width:2.1rem;
    display: flex;
    align-items:center;
    justify-content: center;
    cursor: pointer;
    
    &:hover{
      border: 4px solid rgba(255,255,255,0.5)
    }
`; */

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TrelloLogo = styled.img`
  width: 75px;
  height: 15px;
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  ${xs({
    display: "none",
  })}
`;

const Navbar = () => {
  const boards = useSelector(state=>state.boards.boardsData);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(!Object.keys(boards).length)
      getBoards(dispatch);
  },[boards, dispatch]);


  const menuItems = ()=>{
    let temp = [];
    try {
      boards.map(board => {
        temp.push({
          title: board.title,
          id: board._id,
          cb: ()=>{
            history.push('/board/'+board._id);
          }
        })
        return null;
      })
    } catch (error) {
      
    }
   
    return temp;
  }
  return (
    <Container>
      <LeftSide>
        <LogoContainer>
          <TrelloLogo src="https://a.trellocdn.com/prgb/dist/images/header-logo-spirit-loading.87e1af770a49ce8e84e3.gif" />
        </LogoContainer>
        <DropdownContainer>
          <DropdownMenu
            title="Your Boards"
            menu={menuItems()}
          />
        </DropdownContainer>
      </LeftSide>
      <RightSide>
        <SearchBar />
        <ProfileBox/>
      </RightSide>
    </Container>
  );
};

export default Navbar;
