import AnswerPart from "../AnswerPart/AnswerPart";
import Timer from "../Timer/Timer";
import { Button } from "antd";
import { useState, useEffect, useContext } from "react";
import { GameContext } from "../../context/game.context";

const QuizBoard = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isTimimg, setIsTimimg] = useState(true);
  const { questions } = useContext(GameContext);

  console.log(questions);

  const goToNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
    setIsTimimg(true);
  };

  const goToPreviosQuestion = () => {
    setQuestionNumber(questionNumber - 1);
    setIsTimimg(true);
  };

  const timeUpHandle = () => {
    setIsTimimg(false);
  };

  useEffect(() => {
    setTimeout(timeUpHandle, 10000);
  }, [questionNumber]);

  return (
    <div className="quiz-board">
      <div style={{ marginBottom: 80 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="question-index" style={{ fontSize: 40 }}>
            Question {questionNumber + 1}:
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button type="primary" onClick={goToPreviosQuestion}>
              Prev Question
            </Button>
            <Button type="primary" onClick={goToNextQuestion}>
              Next Question
            </Button>
          </div>
        </div>
        <div
          className="question-content"
          style={{
            textAlign: "center",
            fontSize: 80,
            boxShadow: "4px 4px 2px #aaaaaa",
            paddingBottom: 20,
          }}
        >
          {questions[questionNumber].question}
        </div>
        {questions[questionNumber].imgUrl ? (
          <div
            className="question-image"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={questions[questionNumber].imgUrl}
              alt="img"
              style={{ height: "50vh", marginTop: 20 }}
            />
          </div>
        ) : (
          <div style={{ backgroundColor: "#d3d3d3", height: "50vh" }}></div>
        )}
        {isTimimg && <Timer />}
      </div>
      <AnswerPart
        isTimimg={isTimimg}
        answers={questions[questionNumber].answer}
        correctAnswer={questions[questionNumber].correctAnswer}
      />
    </div>
  );
};

export default QuizBoard;
