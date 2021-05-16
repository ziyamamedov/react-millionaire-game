import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import {
  closePendingModal,
  correctAnswer,
  looseGame,
  openPendingModal,
  playAudio,
} from "../redux/reducers/gameReducer";

const answerHandler = (
  e: React.BaseSyntheticEvent,
  correct: string,
  setState: Function,
  dispatch: Dispatch
) => {
  setState({ bg: "chosen" });
  //isPending opens an invisible block that prevents pushing buttons
  dispatch(openPendingModal());
  dispatch(playAudio("suspend"));
  const chosenAnswer = e.target.textContent.slice(3);
  setTimeout(() => {
    if (chosenAnswer === correct) {
      setState({ bg: "correct" });
      dispatch(playAudio("correct"));
      dispatch(closePendingModal());
      setTimeout(() => {
        dispatch(correctAnswer());
        setState({ bg: "default" });
      }, 1000);
    } else {
      console.log("Incorrect!");
      setState({ bg: "incorrect" });
      dispatch(closePendingModal());
      dispatch(playAudio("wrong"));
      setTimeout(() => {
        dispatch(looseGame());
      }, 1000);
    }
  }, 3000);
};

export interface AnswerProps {
  correct: string;
}

const Answer: React.FC<AnswerProps> = (props) => {
  const [state, setState] = useState({ bg: "default" });
  const dispatch = useDispatch();

  return (
    <StyledAnswer
      onClick={(e) => answerHandler(e, props.correct, setState, dispatch)}
      state={state.bg}
    >
      {props.children}
    </StyledAnswer>
  );
};

export default Answer;

const StyledAnswer = styled.li<{ state: string }>`
  width: 180px;
  border: 1px solid white;
  background-color: ${(props): any => {
    if (props.state === "default") {
      return props.theme.quizBg;
    } else if (props.state === "chosen") {
      return props.theme.chosenAnswerBg;
    } else if (props.state === "correct") {
      return props.theme.correctAnswerBg;
    } else if (props.state === "incorrect") {
      return props.theme.incorrectAnswerBg;
    }
  }};
  transition: background-color 0.25s;
  border-radius: 100px;
  padding: 5px 10px;
  margin-bottom: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.btnHover};
    span {
      color: black;
    }
  }
  &:active {
    background-color: ${(props) => props.theme.btnActive};
  }
  span {
    color: ${(props) => (props.state !== "default" ? "black" : "orange")};
    font-weight: bold;
    font-size: 0.8rem;
    margin-right: 5px;
  }
`;
