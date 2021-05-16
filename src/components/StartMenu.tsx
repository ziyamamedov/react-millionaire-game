import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { startGameThunk } from "../redux/reducers/gameReducer";
import Button from "./Button";

//Event handlers
const submitHandler = (e: any, dispatch: Dispatch<any>) => {
  e.preventDefault();
  const value = e.target.input.value;
  const questionQuan = value ? Number(value) : 15;

  dispatch(startGameThunk(questionQuan));
};
const keyInputHandler = (e: any) => {
  if ((e.key >= "0" && e.key <= "9") || e.key === "Backspace") {
  } else {
    e.preventDefault();
  }
};
const changeInputHandler = (e: React.BaseSyntheticEvent) => {
  if (e.target.value > 15) e.target.value = 15;
};

export interface MenuProps {}
const StartMenu: React.FC<MenuProps> = () => {
  const dispatch = useDispatch();

  return (
    <StyledMenu
      onSubmit={(e) => {
        submitHandler(e, dispatch);
      }}
    >
      <StyledMenuTitle>Welcome to millionaire game!</StyledMenuTitle>
      <StyledLabel>
        Number of questions(max - 15)
        <StyledInput
          name="input"
          autoFocus
          placeholder="15"
          onKeyDown={(e) => keyInputHandler(e)}
          onChange={(e) => changeInputHandler(e)}
        />
      </StyledLabel>

      <Button>Start game</Button>
    </StyledMenu>
  );
};

export default StartMenu;

//Styles
const StyledMenu = styled.form`
  background: ${(props) => props.theme.menuGradient};
  padding: 2rem;
  border-radius: 20%;
  color: white;
  display: flex;
  flex-direction: column;
`;
export const StyledMenuTitle = styled.h1`
  font-size: 26px;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 10px;
  max-width: 50px;
  margin-left: 2rem;
`;
