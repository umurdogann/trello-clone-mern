import { xs } from "../../../BreakPoints";
import styled from "styled-components";

export const Container = styled.div`
background-image: url(${props=>props.backgroundImg});
  background-position: 50%;
  background-size: cover;
  padding: 3rem 0rem 0rem 0rem;
  height: 100vh;
  width: 100%;
  overflow-x: visible;
  ${xs({
    paddingTop: "3.3rem",
  })}
`;

export const ListContainer = styled.div`
padding-left: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: visible;
  overflow-y: hidden;
  gap: 0.3rem;
  width: 100%;
  height: calc(100% - 60px);
`;
