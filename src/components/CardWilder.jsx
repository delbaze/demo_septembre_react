import "./CardWilder.css";
import logo from "./person.png";
import axios from "axios";
import { toast } from "react-toastify";

function CardWilder({ id, firstName, getWilders}) {
  const handleDelete = () => {
    console.log(id);
    axios
      .delete("/wilders/delete", {
        data: {
          id,
        },
      })
      .then((response) => {
        toast(response.data.message, {
          type: response.data.success ? "success" : "error",
        });
        getWilders();
        // if (response.data.success) {
        //   toast(response.data.message, {type: "success"});
        // } else {
        //   toast(response.data.message, {type: "error"});
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card">
      <div className="cardImage">
        <img src={logo} />
      </div>
      <div className="cardTitle">
        <h4>{firstName}</h4>
      </div>
      <div className="cardDescription">description(à faire)</div>
      <div className="cardLanguages">Langages</div>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
}

export default CardWilder;
