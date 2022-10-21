import { useState, useEffect, useContext } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import QuizBoard from "../../components/QuizBoard/QuizBoard";
import WaitingDashboard from "../../components/WaitingDashboard/WaitingDashboard";

const Game = () => {
  const [isStart, setIsStart] = useState("STARTING");

  const unsub = onSnapshot(
    doc(db, "questionList", "Test1", "games", "game1"),
    (doc) => {
      setIsStart(doc.data().status);
    }
  );

  const startGame = async () => {
    await updateDoc(doc(db, "questionList", "Test1", "games", "game1"), {
      status: "STARTING",
    });
  };

  useEffect(() => {
    unsub();
  }, [isStart]);

  return (
    <div>
      {isStart === "STARTING" ? (
        <QuizBoard />
      ) : (
        <WaitingDashboard startGame={startGame} />
      )}
    </div>
  );
};

export default Game;
