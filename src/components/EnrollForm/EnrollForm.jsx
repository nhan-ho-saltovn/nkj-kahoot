import "./EnrollForm.style.scss";
import { Button } from "antd";
import { db } from "../../utils/firebase/firebase.utils";
import { doc, getDoc, collection, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const EnrollForm = () => {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const submitInput = async () => {
    const docRef = doc(db, "questionList", input);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const id = uuid();
      localStorage.setItem("player", id);
      await setDoc(doc(db, "questionList", "Test1", "game1", id), {
        name: name,
        point: 0,
      });
      navigate(`/${input}`);
    } else {
      console.log("No such document!");
    }
  };

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
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ display: "flex", color: "white" }}>
            <div>Game Pin: </div>
            <input
              className="game-pin-input"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", color: "white", marginTop: 10 }}>
            <div>Your Name </div>
            <input
              className="name-input"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <Button type="primary" onClick={submitInput}>
          Enter
        </Button>
      </div>
    </div>
  );
};

export default EnrollForm;
