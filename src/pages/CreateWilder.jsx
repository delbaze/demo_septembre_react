import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useNavigate, useLocation } from "react-router-dom";
function CreateWilder(props) {
  console.log(
    "🟩🟩🟩🟩🟩 ~ file: CreateWilder.jsx ~ line 6 ~ CreateWilder ~ props",
    props
  );
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = params;
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    age: "",
  });

  const canBeSubmit = () => {
    return !state.first_name || !state.last_name || !state.age;
  };
  useEffect(() => {
    if (id) {
      axios
        .get(`/wilders/${id}`)
        .then((response) => {
          console.log(response);
          if (response.data.success) {
            setState(response.data.wilder);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setState({
        first_name: "",
        last_name: "",
        age: "",
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault(); //On stoppe le comportement initial du onSubmit
    if (state.first_name && state.last_name && state.age) {
      if (id) {
        //edition
        axios
          .patch(`/wilders/update/${id}`, state)
          .then((response) => {
            console.log(response);
            if (response.data.wilder.affected !== 0) {
              navigate("/", { replace: true });
            } else {
              console.log("afficher une erreur");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("CREATION", id);
        axios
          .post("/wilders/create", state)
          .then(function (response) {
            console.log(response);
            toast(response.data.message, {
              type: response.data.success ? "success" : "error",
            });
            // e.target.reset(); // on vide les champs du formulaire
            setState({ first_name: "", last_name: "", age: "" });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
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
          <input
            name="first_name"
            onChange={handleChange}
            required
            value={state.first_name}
          />
        </div>
        <div>
          <label htmlFor="last_name">Prénom du wilder</label>
          <input
            name="last_name"
            onChange={handleChange}
            required
            value={state.last_name}
          />
        </div>
        <div>
          <label htmlFor="age">Age du wilder</label>
          <input
            name="age"
            type="number"
            onChange={handleChange}
            required
            value={state.age}
          />
        </div>
        <button type="submit" disabled={canBeSubmit()}>
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default CreateWilder;
