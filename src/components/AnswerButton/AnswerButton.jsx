const AnswerButton = ({ answerCharacter, color, content }) => {
  return (
    <div
      className="answer-button"
      style={{ display: "flex", justifyContent: "center" }}
    >
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
    </div>
  );
};

export default AnswerButton;