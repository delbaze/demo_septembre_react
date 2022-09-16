import axios from "axios";
import CardWilder from "./../components/CardWilder";
import CreateWilder from "./CreateWilder";
import { useState, useEffect } from "react";
import "./Accueil.css";
function Accueil() {
  const [wilders, setWilders] = useState([]);
  const getWilders = () => {
    axios.get("/wilders").then((response) => {
      console.log(response);
      setWilders(response.data.wilders);
    });
  };
  useEffect(() => {
    // setTimeout(() => {
    getWilders();
    // }, 5000);
  }, []);
  return (
    <>
      <CreateWilder getWilders={getWilders} />
      <div className="cardBloc">
        {wilders.map((wilder) => (
          <CardWilder key={wilder.id} firstName={wilder.first_name} />
        ))}
      </div>
    </>
  );
}
export default Accueil;
