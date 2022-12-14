import AnswerPart from "../AnswerPart/AnswerPart";
import PointBoard from "../PointBoard/PointBoard";
import Timer from "../Timer/Timer";
import { Button } from "antd";
import { useState, useEffect, useContext } from "react";
import { GameContext } from "../../context/game.context";
import { db } from "../../utils/firebase/firebase.utils";
import { doc, updateDoc, onSnapshot, getDoc } from "firebase/firestore";

const QuizBoard = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isTimimg, setIsTimimg] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answerTime, setAnswerTime] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);
  const { questions } = useContext(GameContext);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [isShowResult, setIsShowResult] = useState(false);

  const goToNextQuestion = () => {
    setTimeout(() => {
      setIsTimimg(true);
    }, 1);
    setIsTimimg(false);
    setIsCorrect(false);
    updateDoc(doc(db, "questionList", "Test1", "games", "game1"), {
      currentQuestion: questionNumber + 2,
    });
    setIsShowResult(false);
  };

  const goToPreviosQuestion = () => {
    setTimeout(() => {
      setIsTimimg(true);
    }, 1);
    setIsTimimg(false);
    setIsCorrect(false);
    updateDoc(doc(db, "questionList", "Test1", "games", "game1"), {
      currentQuestion: questionNumber,
    });
    setIsShowResult(false);
  };

  const seeResult = () => {
    setIsShowResult(true);
  };

  useEffect(() => {
    const unsubQuestionNumber = () => {
      onSnapshot(doc(db, "questionList", "Test1", "games", "game1"), (doc) => {
        setQuestionNumber(doc.data().currentQuestion - 1);
      });
    };

    let timer = setTimeout(() => setIsTimimg(false), 10000);

    setTimeout(() => {
      setIsTimimg(true);
    }, 1);

    setIsTimimg(false);
    setIsShowResult(false);
    setCurrentTime(Date.now());
    unsubQuestionNumber();
    return () => {
      clearTimeout(timer);
    };
  }, [questionNumber]);

  return (
    <div className="quiz-board">
      <div style={{ marginBottom: 80 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="question-index" style={{ fontSize: 40 }}>
            Question {questionNumber + 1}:
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {!isShowResult ? (
              <Button onClick={seeResult} disabled={isTimimg}>
                See Result
              </Button>
            ) : (
              <div>
                {!!questionNumber && (
                  <Button type="primary" onClick={goToPreviosQuestion}>
                    Prev Question
                  </Button>
                )}
                {!!(questionNumber - questions.length + 1) && (
                  <Button type="primary" onClick={goToNextQuestion}>
                    Next Question
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
        {isShowResult ? (
          <PointBoard />
        ) : (
          <div>
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
        )}
      </div>
      {!isShowResult && (
        <AnswerPart
          isTimimg={isTimimg}
          answers={questions[questionNumber].answer}
          correctAnswer={questions[questionNumber].correctAnswer}
          setIsCorrect={setIsCorrect}
          currentTime={currentTime}
          answerTime={answerTime}
          setAnswerTime={setAnswerTime}
          totalPoint={totalPoint}
          setTotalPoint={setTotalPoint}
        />
      )}
    </div>
  );
};

export default QuizBoard;
