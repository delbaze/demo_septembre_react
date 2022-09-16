import "./CardWilder.css";
import logo from "./person.png";
function CardWilder({ firstName }) {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={logo} />
      </div>
      <div className="cardTitle">
        <h4>{firstName}</h4>
      </div>
      <div className="cardDescription">
        description(à faire)
      </div>
      <div className="cardLanguages">
        Langages
      </div>
    </div>
  );
}

export default CardWilder;
