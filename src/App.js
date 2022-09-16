import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CardWilder from "./components/CardWilder";
function App() {
  const [wilders, setWilders] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios.get("/wilders").then((response) => {
        console.log(response.data.wilders);
        setWilders(response.data.wilders);
      });
    }, 5000);
  }, []);
  return (
    <div>
      Mon app
      {wilders.map((wilder) => (
        <CardWilder key={wilder.id} firstName={wilder.first_name} />
      ))}
    </div>
  );
}

export default App;
