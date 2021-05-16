import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/reducers";
import Answer from "./Answer";

function decodeHtml(html: string) {
  let areaElement = document.createElement("textarea");
  areaElement.innerHTML = html;

  return areaElement.value;
}

export interface QuizProps {}

const Quiz: React.FC<QuizProps> = () => {
  const questionId = useSelector(
    (state: RootState) => state.game.currentQuestion
  );
  const quiz = useSelector((state: RootState) => state.quiz[questionId - 1]);
  const question = decodeHtml(quiz.question);
  const correctAnswer = decodeHtml(quiz.correct_answer);
  const incorrectAnswers = quiz.incorrect_answers.map((answer) =>
    decodeHtml(answer)
  );

  console.log("Correct answer: ", correctAnswer);

  return (
    <StyledQuiz>
      <StyledQuestion>{decodeHtml(question)}</StyledQuestion>
      <StyledAnswers>
        <Answer correct={decodeHtml(correctAnswer)}>
          <span>A:</span> {incorrectAnswers[0]}
        </Answer>
        <Answer correct={correctAnswer}>
          <span>B:</span> {incorrectAnswers[1]}
        </Answer>
        <Answer correct={correctAnswer}>
          <span>C:</span> {incorrectAnswers[2]}
        </Answer>
        <Answer correct={correctAnswer}>
          <span>D:</span> {incorrectAnswers[3]}
        </Answer>
      </StyledAnswers>
    </StyledQuiz>
  );
};

export default Quiz;
const StyledQuiz = styled.div`
  color: ${(props) => props.theme.mainTextColor};
  width: 500px;
`;

const StyledQuestion = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid white;
  background-color: ${(props) => props.theme.quizBg};
  border-radius: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 1rem;
`;
const StyledAnswers = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
