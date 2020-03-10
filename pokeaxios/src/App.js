import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';


function App() {
  const [pokemans, setPokemans] = useState([]);
  const handleClick = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=999").then(response =>{
      console.log(response);
      setPokemans(response.data.results)
    })
  }

  return (
    <div className="App">
      <button onClick={handleClick} className="btn btn-danger">Fetch the pokemon</button>
      {
        pokemans.map((pokeman, idx) => {
          return <p key={idx} index={idx}>{pokeman.name} #{idx +1}</p>
        })
      }
    </div>
  );
}

export default App;
