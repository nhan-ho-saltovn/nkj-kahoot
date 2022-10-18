import "./EnrollForm.style.scss";

const EnrollForm = () => {
  return (
    <div className="enroll-form">
      <div
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: 40,
          marginBottom: 20,
        }}
      >
        ENTER GAME PIN:
      </div>
      <input className="game-pin-input" />
    </div>
  );
};

export default EnrollForm;
