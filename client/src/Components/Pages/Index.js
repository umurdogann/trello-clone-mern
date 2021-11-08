import React from "react";
import IndexNav from "../IndexNav";
import styled from "styled-components";
import { lg, sm } from "../../BreakPoints";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  background: linear-gradient(rgb(234, 230, 255), rgb(255, 255, 255)) no-repeat;
  color: rgb(9, 30, 66);
  width: 100%;
  display: flex;
  justify-content: center;
  color: #091e42;
`;

const Content = styled.section`
  display: flex;
  min-height: 100vh;
  padding-top: 4rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10%;

  ${lg({
    flexDirection: "column-reverse",
    paddingTop:"6rem",
    alignItems: "stretch",    
    gap: "5%",
  })}
`;

const LeftSide = styled.div`
  box-sizing: border-box;
  flex: 1;
`;
const LeftWrapper = styled.div`
  width: 39rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${sm({
    width: "19rem",
    alignItems: "center",
    
  })}
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  ${sm({
    fontSize: "1.5rem",
    textAlign: "center",
  })}
`;

const Text = styled.h3`
  margin-top: 0.5rem;
  font-family: "Charlie Text", sans-serif;
  font-size: 1.3rem;
  text-align: left;
  line-height: 1.5;
  ${sm({
    fontSize: "1rem",
    textAlign: "center",
    padding: "0px, 3rem",
  })}
`;

const Button = styled.button`
  margin-top: 2rem;
  font-size: 1.25rem;
  background-color: #0065ff;
  width: fit-content;
  border-radius: 0.4rem;
  padding: 0.75rem 2rem;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0952cc;
  }

  ${lg({
    marginTop: "1.5rem",
    width: "100%",
  })}
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  ${lg({
    maxHeight: "300px"
  })}
`;

const SvgItem = styled.img`
  width: 400.5px;
  aspect-ratio: auto 465.5 / 602.5;
  height: 540.5px;
  
  ${lg({
    width: "300px",
    height: "272px",
  })}
`;

const Index = () => {
  let history = useHistory();
  return (
    <>
      <IndexNav />
      <Container>
        <Content>
          <LeftSide>
            <LeftWrapper>
              <Title>Trello helps teams move work forward.</Title>
              <Text>
                Collaborate, manage projects, and reach new productivity peaks.
                From high rises to the home office, the way your team works is
                unique—accomplish it all with Trello.
              </Text>
              <Button onClick={()=>history.push("/register")}>Sign up - it's free</Button>
            </LeftWrapper>
          </LeftSide>
          <RightSide>
            <SvgItem src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp" />
          </RightSide>
        </Content>
      </Container>
    </>
  );
};

export default Index;
