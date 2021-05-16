import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { quizReducer } from "./quizReducer";

export const rootReducer = combineReducers({
  quiz: quizReducer,
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
