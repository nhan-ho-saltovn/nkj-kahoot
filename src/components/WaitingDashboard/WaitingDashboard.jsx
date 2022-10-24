import PlayerCard from "../PlayerCard/PlayerCard";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, query, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import "./WaitingDashboard.style.scss";
import { useEffect } from "react";

const WaitingDashboard = ({ startGame }) => {
  const q = query(
    collection(db, "questionList", "Test1", "games", "game1", "players")
  );
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (docs) => {
      setPlayers(
        docs.docs.map((doc) => {
          return {
            ...doc.data(),
          };
        })
      );
    });

    unsubscribe();
  }, [players]);

  return (
    <div
      className="waiting-dashboard flex justify-center"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/269150.jpg')",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="player-display">
        <div>
          <div style={{ color: "white", fontSize: 60 }}>
            Waiting for other players
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={startGame}
              style={{ cursor: "pointer", marginTop: 10 }}
            >
              Start game
            </button>
          </div>
        </div>
        <div className="player-list">
          {players ? (
            players.map((player) => <PlayerCard name={player.name} />)
          ) : (
            <div>Waiting for players...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitingDashboard;
