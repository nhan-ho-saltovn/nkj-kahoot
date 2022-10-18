import AnswerPart from "../AnswerPart/AnswerPart";
import Timer from "../Timer/Timer";
import { Button } from "antd";

const QuizBoard = ({ questionData, goToNextQuestion, goToPreviosQuestion }) => {
  const { index, question, answerList, ...restData } = questionData;
  console.log(restData);
  return (
    <div className="quiz-board">
      <div style={{ marginBottom: 80 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="question-index" style={{ fontSize: 40 }}>
            Question {index}:
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
          {question}
        </div>
        {restData.imgUrl ? (
          <div
            className="question-image"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={restData?.imgUrl}
              alt="img"
              style={{ height: "50vh", marginTop: 20 }}
            />
          </div>
        ) : (
          <div style={{ backgroundColor: "#d3d3d3", height: "50vh" }}></div>
        )}
        <Timer />
      </div>
      <AnswerPart answerList={answerList} />
    </div>
  );
};

export default QuizBoard;
