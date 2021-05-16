import { setQuestionsState } from "./quizReducer";

export type GameStateType = {
  isStarted: boolean;
  questionsQuan: number | null;
  currentQuestion: number;
  currentScore: number;
  isLost: boolean;
  isWon: boolean;
  isCorrect: boolean;
  isPending: boolean;
  isMenu: boolean;
  audio: {
    isPlaying: boolean;
    url: string;
  };
};

const gameInitialState: GameStateType = {
  isStarted: false,
  questionsQuan: 15,
  currentQuestion: 1,
  currentScore: 0,
  isLost: false,
  isWon: false,
  isCorrect: false,
  isPending: false,
  isMenu: false,
  audio: {
    isPlaying: false,
    url: "",
  },
};

//Game Reducer
export const gameReducer = (
  state = gameInitialState,
  action: RootGameActionType
): GameStateType => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        isStarted: true,
        currentQuestion: 1,
        questionsQuan: action.payload,
        audio: { isPlaying: true, url: "gameStarted" },
      };
    case CORRECT_ANSWER:
      if (state.currentQuestion === state.questionsQuan) {
        return {
          ...state,
          isWon: true,
          isMenu: true,
          audio: { isPlaying: true, url: "victory" },
          currentScore: state.currentScore === 0 ? 100 : state.currentScore * 2,
        };
      }
      return {
        ...state,
        isMenu: true,
        isCorrect: true,
        currentScore: state.currentScore === 0 ? 100 : state.currentScore * 2,
      };
    case LOOSE_GAME:
      return {
        ...state,
        isLost: true,
        isMenu: true,
      };
    case OPEN_START_MENU:
      return gameInitialState;
    case OPEN_PENDING_MODAL:
      return { ...state, isPending: true };
    case CLOSE_PENDING_MODAL:
      return { ...state, isPending: false };
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        isMenu: false,
        isCorrect: false,
      };
    case OPEN_MENU:
      return { ...state, isMenu: true };
    case CONTINUE_GAME:
      return { ...state, isMenu: false };
    case PLAY_AUDIO:
      return { ...state, audio: { url: action.payload, isPlaying: true } };
    case STOP_AUDIO:
      return { ...state, audio: { url: "", isPlaying: false } };
    default:
      return state;
  }
};

//Action Names
const START_GAME = "START_GAME";
const LOOSE_GAME = "LOOSE_GAME";
const CORRECT_ANSWER = "CORRECT_ANSWER";
const OPEN_START_MENU = "OPEN_START_MENU";
const OPEN_PENDING_MODAL = "OPEN_PENDING_MODAL";
const CLOSE_PENDING_MODAL = "CLOSE_PENDING_MODAL";
const NEXT_QUESTION = "NEXT_QUESTION";
const OPEN_MENU = "OPEN_MENU";
const CONTINUE_GAME = "CONTINUE_GAME";
const PLAY_AUDIO = "PLAY_AUDIO";
const STOP_AUDIO = "STOP_AUDIO";

//Actions types
type RootGameActionType =
  | StartGameActionType
  | LooseGameActionType
  | CorrectAnswerActionType
  | OpenStartMenuActionType
  | OpenPendingModalActionType
  | ClosePendingModalActionType
  | NextQuestionActionType
  | OpenMenuActionType
  | ContinueGameActionType
  | PlayAudioActionType
  | StopAudioActionType;

type StartGameActionType = {
  type: typeof START_GAME;
  payload: number;
};
type LooseGameActionType = {
  type: typeof LOOSE_GAME;
};
type CorrectAnswerActionType = {
  type: typeof CORRECT_ANSWER;
};
type OpenStartMenuActionType = {
  type: typeof OPEN_START_MENU;
};
type OpenPendingModalActionType = {
  type: typeof OPEN_PENDING_MODAL;
};
type ClosePendingModalActionType = {
  type: typeof CLOSE_PENDING_MODAL;
};
type NextQuestionActionType = {
  type: typeof NEXT_QUESTION;
};
type OpenMenuActionType = {
  type: typeof OPEN_MENU;
};
type ContinueGameActionType = {
  type: typeof CONTINUE_GAME;
};
type PlayAudioActionType = {
  type: typeof PLAY_AUDIO;
  payload: string;
};
type StopAudioActionType = {
  type: typeof STOP_AUDIO;
};

//actionCreators
export const startGame = (quan: number): StartGameActionType => {
  return { type: START_GAME, payload: quan };
};
export const looseGame = (): LooseGameActionType => {
  return { type: LOOSE_GAME };
};
export const correctAnswer = (): CorrectAnswerActionType => {
  return { type: CORRECT_ANSWER };
};
export const openStartMenu = (): OpenStartMenuActionType => {
  return { type: OPEN_START_MENU };
};
export const openPendingModal = (): OpenPendingModalActionType => {
  return { type: OPEN_PENDING_MODAL };
};
export const closePendingModal = (): ClosePendingModalActionType => {
  return { type: CLOSE_PENDING_MODAL };
};
export const nextQuestion = (): NextQuestionActionType => {
  return { type: NEXT_QUESTION };
};
export const openMenu = (): OpenMenuActionType => {
  return { type: OPEN_MENU };
};
export const continueGame = (): ContinueGameActionType => {
  return { type: CONTINUE_GAME };
};
export const playAudio = (url: string): PlayAudioActionType => {
  return { type: PLAY_AUDIO, payload: url };
};
export const stopAudio = (): StopAudioActionType => {
  return { type: STOP_AUDIO };
};

//Thunk creators
export function startGameThunk(questionQuan: number) {
  return function (dispatch: any) {
    fetch(`https://opentdb.com/api.php?amount=${questionQuan}&type=multiple`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(startGame(questionQuan));
        dispatch(setQuestionsState(data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
