import AnswerButton from "../AnswerButton/AnswerButton";
import "./AnswerPart.style.scss";
import { useState, useEffect, useContext } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { doc, setDoc, onSnapshot, getDoc } from "firebase/firestore";
import { AuthContext } from "../../context/auth.context";

const AnswerPart = ({
  isTimimg,
  answers,
  correctAnswer,
  setIsCorrect,
  currentTime,
  answerTime,
  setAnswerTime,
  totalPoint,
  setTotalPoint,
}) => {
  const { user } = useContext(AuthContext);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const colorArray = ["#ea4c46", "blue", "#228c22", "#DE970B"];
  const answerCharacterArray = ["A", "B", "C", "D"];

  const answerArray = answers?.map((answer, index) => {
    return {
      answerCharacter: answerCharacterArray[index],
      color: colorArray[index],
      content: answer,
    };
  });

  const updatePoint = async () => {
    await setDoc(
      doc(db, "questionList", "Test1", "games", "game1", "players", user.id),
      {
        name: user.name,
        point: totalPoint + 10000 - (answerTime - currentTime),
      }
    );
    setTotalPoint(totalPoint + 10000 - (answerTime - currentTime));
  };

  useEffect(() => {
    if (
      selectedAnswer === correctAnswer ||
      selectedAnswer ===
        answerArray.filter(
          (answer) => answer.answerCharacter === correctAnswer
        )[0].content
    ) {
      setIsCorrect(true);
      updatePoint();
    } else {
      setIsCorrect(false);
    }
  }, [selectedAnswer]);

  useEffect(() => {
    setSelectedAnswer("");
  }, [answers]);

  return (
    <div className="answer-part">
      {isTimimg
        ? answerArray?.map((answer, index) => (
            <AnswerButton
              type="timing-btn"
              key={index}
              answerCharacter={answer.answerCharacter}
              color={answer.color}
              content={answer.content}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              setAnswerTime={setAnswerTime}
              answerTime={answerTime}
            />
          ))
        : answerArray?.map((answer, index) => {
            if (answer.answerCharacter === correctAnswer)
              return (
                <AnswerButton
                  key={index}
                  answerCharacter={answer.answerCharacter}
                  color={colorArray[2]}
                  content={answer.content}
                />
              );
            else {
              return (
                <AnswerButton
                  key={index}
                  answerCharacter={answer.answerCharacter}
                  color={colorArray[0]}
                  content={answer.content}
                />
              );
            }
          })}
    </div>
  );
};

export default AnswerPart;
