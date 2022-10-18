import AnswerButton from "../AnswerButton/AnswerButton";
import "./AnswerPart.style.scss";

const AnswerPart = ({ answerList }) => {
  const colorArray = ["#ea4c46", "blue", "#228c22", "#DE970B"];
  const answerCharacterArray = ["A", "B", "C", "D"];
  const questionArray = answerList?.map((answer, index) => {
    return {
      answerCharacter: answerCharacterArray[index],
      color: colorArray[index],
      content: answer,
    };
  });
  return (
    <div className="answer-part">
      {questionArray?.map((question, index) => (
        <AnswerButton
          key={index}
          answerCharacter={question.answerCharacter}
          color={question.color}
          content={question.content}
        />
      ))}
    </div>
  );
};

export default AnswerPart;
