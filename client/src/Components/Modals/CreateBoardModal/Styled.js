import { xs } from "../../../BreakPoints";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  width: fit-content;
  gap: 0.5rem;
  flex-direction: column;
  padding: 0px, 0.5rem;
  outline: none;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 25.25rem;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  ${xs({
    width: "18.5rem",
    flexDirection: "column",
    alignItems: "center",
  })}
`;

export const TitleCard = styled.div`
  min-width: 18.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Panel = styled.div`
  background-image: url(${(props) => props.link});
  background-size: cover;
  background-position: center center;
  border-radius: 3px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
`;

export const PanelWrapper = styled.div`
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.3);
  position: relative;
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  justify-content: space-around;
`;

export const TitleInput = styled.input`
  width: 90%;
  color: white;
  padding: 0.2rem 0.3rem;
  border-radius: 3px;
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  transition: 150ms linear;
  font-weight: 700;
  &::placeholder {
    font-weight: 700;
    color: rgba(244, 244, 244, 0.7);
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const MemberWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.1rem;
`;

export const MemberInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  border-radius: 3px;
  padding-left: 0.4rem;
  background-color: rgba(255, 255, 255, 0);
  transition: 150ms linear;
  border: 1px solid rgba(255, 255, 255, 0.05);
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const MemberIcon = styled.div`
  color: #cdcdcd;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

export const MemberInput = styled.input`
  width: 81.5%;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  margin-top: 1px;
  padding: 0.2rem 0.3rem;
  font-weight: 600;
  font-size: 0.9rem;

  &::placeholder {
    color: #cdcdcd;
  }
`;

export const AddButton = styled.div`
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  height: 100%;
  width: 1.7rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 150ms ease-out;
  border: 1px solid rgba(255, 255, 255, 0.05);
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
    color: rgba(255, 255, 255, 1);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  height: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: 150ms linear;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
  &:active {
    color: rgba(255, 255, 255, 1);
  }
`;

export const CreateButton = styled.button`
  width: 35%;
  font-weight: 500;
  padding: 0.4rem;
  border: none;
  border-radius: 0.25rem;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  background-color: #2099df;
  transition: 100ms linear;
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  &:hover {
    background-color: #1089cf;
  }
  &:active {
    background-color: #0079bf;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: rgba(128, 128, 128, 1);
    color: rgba(200, 200, 200, 0.5);
  }
`;

export const CloseIcon = styled.div``;

export const PhotosCard = styled.div`
  width: 100%;
  min-height: 96px;
  max-width: 18.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  ${xs({
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  })}
`;

export const PhotoWrapper = styled.div`
  background-image: url(${(props) => props.link});
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 3px;
  background-position: center center;
  background-size: cover;
  ${xs({
    width: "3rem",
    height: "3rem",
    margin: "0",
  })}
`;

export const Photo = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-color: ${(props) =>
    props.show ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.0)"};
  cursor: pointer;
  transition: 150ms ease-in;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const DoneIconWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  color: white;
`;

export const ChipWrapper = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 0.5rem 0.5rem 0.5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 0.2rem;
`;
