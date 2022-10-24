import { db } from "../../utils/firebase/firebase.utils";
import {
  doc,
  onSnapshot,
  collection,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import PointCard from "../PointCard/PointCard";

const PointBoard = () => {
  const q = query(
    collection(db, "questionList", "Test1", "games", "game1", "players"),
    orderBy("point", "desc"),
    limit(5)
  );
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const unsubscribe = () => {
      onSnapshot(q, (docs) => {
        setPlayers(
          docs.docs.map((doc) => {
            return {
              ...doc.data(),
            };
          })
        );
      });
    };

    unsubscribe();
  }, [players]);

  return (
    <div className="point-board">
      <div className="flex justify-center" style={{ fontSize: 60 }}>
        LEADERBOARD
      </div>
      <div className="flex flex-col items-center">
        {players.map((player) => (
          <PointCard name={player.name} point={player.point} />
        ))}
      </div>
    </div>
  );
};

export default PointBoard;
