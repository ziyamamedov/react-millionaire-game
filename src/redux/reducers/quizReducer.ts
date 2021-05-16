const quizInitialState = [
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "How many sovereign states are members of the United Nations?",
    correct_answer: "195",
    incorrect_answers: ["201", "153", "178"],
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "medium",
    question: "How many degrees Fahrenheit is 100 degrees Celsius? ",
    correct_answer: "212",
    incorrect_answers: ["326", "100", "451"],
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who wrote the children&#039;s story &quot;The Little Match Girl&quot;?",
    correct_answer: "Hans Christian Andersen",
    incorrect_answers: ["Charles Dickens", "Lewis Carroll", "Oscar Wilde"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What&#039;s the name of the halloween-related Sims 4 Stuff Pack released September 29th, 2015?",
    correct_answer: "Spooky Stuff",
    incorrect_answers: [
      "Ghosts n&#039; Ghouls",
      "Nerving Nights",
      "Fearful Frights",
    ],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which famous 90&#039;s rap album is commonly referred to as &quot;The Bible of Hip Hop&quot;?",
    correct_answer: "Illmatic",
    incorrect_answers: [
      "The Low End Theory",
      "The Chronic",
      "Enter The Wu-Tang (36 Chambers)",
    ],
  },
  {
    category: "Celebrities",
    type: "multiple",
    difficulty: "medium",
    question:
      "Before voicing Pearl in Steven Universe, Deedee Magno Hall was part of which American band?",
    correct_answer: "The Party",
    incorrect_answers: [
      "The Weather Girls",
      "The Pussycat Dolls",
      "The Cheetah Girls",
    ],
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Where is the &quot;Sonoran Desert&quot; located?",
    correct_answer: "North America",
    incorrect_answers: ["South America", "Asia", "Africa"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Iron Maiden album did the song &quot;Dream of Mirrors&quot; feature in?",
    correct_answer: "Brave New World",
    incorrect_answers: [
      "Dance of Death",
      "A Matter of Life and Death",
      "Somewhere in Time",
    ],
  },
  {
    category: "Entertainment: Cartoon & Animations",
    type: "multiple",
    difficulty: "hard",
    question:
      "Benny, Brain, Fancy-Fancy, Spook and Choo-Choo were known associates of what Hanna Barbera cartoon character?",
    correct_answer: "Top Cat",
    incorrect_answers: ["Yogi Bear", "Snagglepuss", "Scooby-Doo"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the maximum level you can have in a single class in Dungeons and Dragons (5e)?",
    correct_answer: "20",
    incorrect_answers: ["30", "15", "25"],
  },
];

type QuizStateType = typeof quizInitialState;

export const quizReducer = (
  state = quizInitialState,
  action: RootQuizActionType
): QuizStateType => {
  switch (action.type) {
    case SET_QUESTIONS_STATE:
      //Below we put the correct answer to the array of incorrect answers(all answers)
      const newState = action.payload.map((quiz) => {
        const randomId = Math.floor(Math.random() * (4 - 0)) + 0;
        quiz.incorrect_answers.splice(randomId, 0, quiz.correct_answer);
        return quiz;
      });
      return newState;
    default:
      return state;
  }
};

//Action names
const SET_QUESTIONS_STATE = "SET_QUESTIONS_STATE";

//Actions types
type RootQuizActionType = SetQuestionsActionType;

type SetQuestionsActionType = {
  type: typeof SET_QUESTIONS_STATE;
  payload: QuizStateType;
};

//Action Creators
export const setQuestionsState = (
  questions: QuizStateType
): SetQuestionsActionType => {
  return { type: SET_QUESTIONS_STATE, payload: questions };
};
