const PointCard = ({ name, point }) => {
  return (
    <div
      className="point-card flex justify-around m-2 p-2 rounded-lg"
      style={{ width: 600, backgroundColor: "black", color: "white" }}
    >
      <div>{name}</div>
      <div>{point}</div>
    </div>
  );
};

export default PointCard;
