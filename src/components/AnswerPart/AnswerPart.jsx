import AnswerButton from "../AnswerButton/AnswerButton";
import "./AnswerPart.style.scss";
import { useState, useEffect } from "react";
const AnswerPart = ({ isTimimg, answers, correctAnswer, setIsCorrect }) => {
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

  useEffect(() => {
    if (
      selectedAnswer === correctAnswer ||
      selectedAnswer ===
        answerArray.filter(
          (answer) => answer.answerCharacter === correctAnswer
        )[0].content
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }, [selectedAnswer]);
  return (
    <div className="answer-part">
      {isTimimg
        ? answerArray?.map((answer, index) => (
            <AnswerButton
              key={index}
              answerCharacter={answer.answerCharacter}
              color={answer.color}
              content={answer.content}
              setSelectedAnswer={setSelectedAnswer}
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
                  setSelectedAnswer={setSelectedAnswer}
                />
              );
            else {
              return (
                <AnswerButton
                  key={index}
                  answerCharacter={answer.answerCharacter}
                  color={colorArray[0]}
                  content={answer.content}
                  setSelectedAnswer={setSelectedAnswer}
                />
              );
            }
          })}
    </div>
  );
};

export default AnswerPart;
