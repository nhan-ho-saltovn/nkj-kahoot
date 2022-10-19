const AnswerButton = ({
  type,
  answerCharacter,
  color,
  content,
  setSelectedAnswer,
  setAnswerTime,
  answerTime,
}) => {
  return (
    <div
      className="answer-button"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {type === "timing-btn" ? (
        <button
          style={{
            backgroundColor: `${color}`,
            color: "white",
            width: "50%",
            borderRadius: "10px",
            border: "none",
            padding: 10,
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={(e) => {
            setSelectedAnswer(e.target.innerHTML);
            setAnswerTime(Date.now());
            console.log(answerTime);
            console.log(e.target.innerHTML);
          }}
        >
          <div>{answerCharacter}</div>
          <div>{content}</div>
        </button>
      ) : (
        <button
          style={{
            backgroundColor: `${color}`,
            color: "white",
            width: "50%",
            borderRadius: "10px",
            border: "none",
            padding: 10,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          <div>{answerCharacter}</div>
          <div>{content}</div>
        </button>
      )}
    </div>
  );
};

export default AnswerButton;
