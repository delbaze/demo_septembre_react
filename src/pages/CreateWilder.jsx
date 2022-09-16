import { useState } from "react";
import axios from "axios";
function CreateWilder({getWilders}) {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    age: "",
  });
  const canBeSubmit = () => {
    return !state.first_name || !state.last_name || !state.age;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault(); //On stoppe le comportement initial du onSubmit
    if (state.first_name && state.last_name && state.age) {
      //faire ma requête
      console.log(state);
      axios.post('/wilders/create', state)
      .then(function (response) {
        console.log(response);
        getWilders()
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  };

  const handleChange = (e) => {
    let name = e.target.name; //first_name
    let value = e.target.value; //
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="/">
        <div>
          <label htmlFor="first_name">Nom du wilder</label>
          <input name="first_name" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="last_name">Prénom du wilder</label>
          <input name="last_name" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="age">Age du wilder</label>
          <input name="age" type="number" onChange={handleChange} required />
        </div>
        <button
          type="submit"
          disabled={canBeSubmit()}
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default CreateWilder;
