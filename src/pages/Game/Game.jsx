import { useState } from "react";
import QuizBoard from "../../components/QuizBoard/QuizBoard";

const Game = () => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const goToNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const goToPreviosQuestion = () => {
    setQuestionNumber(questionNumber - 1);
  };
  const questionList = [
    {
      index: "1",
      question: "How are you?",
      answerList: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      imgUrl: "https://i.ytimg.com/vi/35ZRRMRZXRA/maxresdefault.jpg",
    },
    {
      index: "2",
      question: "How old r u?",
      answerList: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    },
  ];
  return (
    <div>
      <QuizBoard
        questionData={questionList[0]}
        goToNextQuestion={goToNextQuestion}
        goToPreviosQuestion={goToPreviosQuestion}
      />
    </div>
  );
};

export default Game;
