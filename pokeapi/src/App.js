import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pokemans, setPokemans] = useState([]);
  const handleClick = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=999")
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
            setPokemans(response.results)
        }).catch(err=> {
            console.log(err);
        });
  }
  return (
    <div className="App">
      <button onClick={handleClick} className="btn btn-dark">Fetch Pokemans</button>
      <ul>
        {
          pokemans.map((pokeman, idx) => {
          return <li key={idx} index={idx}>{pokeman.name} #{idx +1}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
