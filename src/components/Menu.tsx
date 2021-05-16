import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { RootState } from "../redux/reducers";
import {
  continueGame,
  nextQuestion,
  openStartMenu,
} from "../redux/reducers/gameReducer";
import Button from "./Button";
import FireWorks from "./Fireworks";
import { StyledMenuTitle } from "./StartMenu";

const restartHandler = (dispatch: Dispatch) => {
  dispatch(openStartMenu());
};
const continueHandler = (isCorrect: boolean, dispatch: Dispatch) => {
  if (isCorrect) {
    dispatch(nextQuestion());
  } else {
    dispatch(continueGame());
  }
};

export interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const gameState = useSelector((state: RootState) => state.game);
  const correctAnswer = useSelector(
    (state: RootState) =>
      state.quiz[gameState.currentQuestion - 1].correct_answer
  );
  const dispatch = useDispatch();
  return (
    <StyledMenuWrapper>
      {gameState.isWon && <FireWorks />}
      <StyledMenu>
        <StyledMenuTitle>
          {(gameState.isLost && "You lost!") ||
            (gameState.isWon && "You Won!") ||
            (gameState.isCorrect && "Correct!") ||
            "Menu"}
        </StyledMenuTitle>
        <StyledDisplay>{`Your score: ${gameState.currentScore}`}</StyledDisplay>
        {gameState.isLost && (
          <StyledDisplay>{`Correct answer: ${correctAnswer}`}</StyledDisplay>
        )}
        <StyledButtonsWrapper>
          <Button onClick={(e) => restartHandler(dispatch)}>
            Restart game
          </Button>
          {!gameState.isWon && !gameState.isLost && (
            <Button
              onClick={() => continueHandler(gameState.isCorrect, dispatch)}
            >
              {gameState.isCorrect ? "Next question" : "Continue game"}
            </Button>
          )}
        </StyledButtonsWrapper>
      </StyledMenu>
    </StyledMenuWrapper>
  );
};

export default Menu;

const StyledMenuWrapper = styled.div`
  color: ${(props) => props.theme.mainTextColor};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledButtonsWrapper = styled.div`
  display: flex;

  button {
    margin-right: 1rem;
    z-index: 50;
    &:last-child {
      margin-right: 0;
    }
  }
`;
const StyledMenu = styled.div`
  min-width: 300px;
  min-height: 200px;
  padding: 2rem;
  background: ${(props) => props.theme.menuGradient};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;

const StyledDisplay = styled.p`
  margin-bottom: 1rem;
`;
