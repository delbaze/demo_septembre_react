// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";

function App() {
  const [valeurInput, setValeurInput] = useState("toto");
  const handleChange = (e) => {
    setValeurInput(e.target.value);
  };

  const handleValidate = () => {
    console.log(valeurInput)
  };
  return (
    <div>
      Mon app
      <h1>Input Contrôlé</h1>
      <input onChange={handleChange} value={valeurInput} placeholder="Entrez une donnée"/>
      <button onClick={handleValidate}>Valider</button>
    {valeurInput}
    </div>
  );
}

export default App;
