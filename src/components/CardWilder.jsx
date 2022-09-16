import "./CardWilder.css";
function CardWilder({ firstName }) {
  return (
    <div className="card">
      <div className="cardImage">
        <img src="" />
      </div>
      <h4>{firstName}</h4>
    </div>
  );
}

export default CardWilder;
