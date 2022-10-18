const PlayerCard = ({ name }) => {
  return (
    <div
      className="player-card"
      style={{
        backgroundColor: "#E27F33",
        display: "flex",
        justifyContent: "center",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <div style={{ fontWeight: "bold", color: "#16294E" }}>{name}</div>
    </div>
  );
};

export default PlayerCard;
