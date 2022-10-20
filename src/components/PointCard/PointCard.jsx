const PointCard = ({ name, point }) => {
  return (
    <div className="point-card" style={{ display: "flex" }}>
      <div>{name}</div>
      <div>{point}</div>
    </div>
  );
};

export default PointCard;
