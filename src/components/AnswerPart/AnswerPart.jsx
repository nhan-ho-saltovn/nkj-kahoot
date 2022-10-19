import AnswerButton from "../AnswerButton/AnswerButton";
import "./AnswerPart.style.scss";

const AnswerPart = ({ isTimimg, answers, correctAnswer }) => {
  const colorArray = ["#ea4c46", "blue", "#228c22", "#DE970B"];
  const answerCharacterArray = ["A", "B", "C", "D"];
  const answerArray = answers?.map((answer, index) => {
    return {
      answerCharacter: answerCharacterArray[index],
      color: colorArray[index],
      content: answer,
    };
  });
  return (
    <div className="answer-part">
      {isTimimg
        ? answerArray?.map((answer, index) => (
            <AnswerButton
              key={index}
              answerCharacter={answer.answerCharacter}
              color={answer.color}
              content={answer.content}
            />
          ))
        : answerArray?.map((answer, index) => {
            if (answer.content === correctAnswer)
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
