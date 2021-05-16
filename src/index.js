import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store";

const theme = {
  mainTextColor: "white",
  quizBg: "#092999",
  menuGradient: "linear-gradient(to left, #4b6cb7, #182848)",
  chosenAnswerBg: "orange",
  correctAnswerBg: "green",
  incorrectAnswerBg: "red",
  btnHover: "orange",
  btnActive: "#ffbc3e",
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
