import "./EnrollForm.style.scss";
import { Button } from "antd";
import { db } from "../../utils/firebase/firebase.utils";
import { doc, getDoc, setDoc, getDocs, collection } from "firebase/firestore";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { AuthContext, AUTH_ACTION_TYPES } from "../../context/auth.context";
import { GameContext, GAME_ACTION_TYPES } from "../../context/game.context";

const EnrollForm = () => {
  const { dispatch: authDispatch } = useContext(AuthContext);
  const { dispatch: gameDispatch } = useContext(GameContext);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const submitInput = async () => {
    const docRef = doc(db, "questionList", "Test1", "games", input);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const id = uuid();
      localStorage.setItem("player", id);
      authDispatch({
        type: AUTH_ACTION_TYPES.JOIN,
        payload: {
          id: id,
          name: name,
        },
      });
      await setDoc(
        doc(db, "questionList", "Test1", "games", "game1", "players", id),
        {
          name: name,
          point: 0,
        }
      );
      const questionsSnapshot = await getDocs(
        collection(db, "questionList", "Test1", "questions")
      );
      const questions = [];
      questionsSnapshot.forEach((doc) => questions.push(doc.data()));

      gameDispatch({
        type: GAME_ACTION_TYPES.PLAY,
        payload: {
          game: input,
          questions: questions,
        },
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
          <div style={{ display: "flex" }}>
            <div style={{ width: 70, color: "white" }}>Game Pin: </div>
            <input
              className="game-pin-input rounded-md"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", marginTop: 10 }}>
            <div style={{ width: 70, color: "white" }}>Your Name: </div>
            <input
              className="name-input rounded-md"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <Button
          type="primary"
          onClick={submitInput}
          className="p-2 rounded font-bold"
          style={{ backgroundColor: "#E17F34", color: "white" }}
        >
          Enter
        </Button>
      </div>
    </div>
  );
};

export default EnrollForm;
