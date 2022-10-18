import { useState, useEffect } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import QuizBoard from "../../components/QuizBoard/QuizBoard";
import WaitingDashboard from "../../components/WaitingDashboard/WaitingDashboard";

const Game = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isStart, setIsStart] = useState("PENDING");
  const unsub = onSnapshot(
    doc(db, "questionList", "Test1", "games", "game1"),
    (doc) => {
      setIsStart(doc.data().status);
    }
  );

  const goToNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const goToPreviosQuestion = () => {
    setQuestionNumber(questionNumber - 1);
  };

  const startGame = async () => {
    await setDoc(doc(db, "questionList", "Test1", "games", "game1"), {
      status: "STARTING",
    });
  };

  useEffect(() => {
    unsub();
  }, [isStart]);

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
      {isStart === "STARTING" ? (
        <QuizBoard
          questionData={questionList[0]}
          goToNextQuestion={goToNextQuestion}
          goToPreviosQuestion={goToPreviosQuestion}
        />
      ) : (
        <WaitingDashboard startGame={startGame} />
      )}
    </div>
  );
};

export default Game;
