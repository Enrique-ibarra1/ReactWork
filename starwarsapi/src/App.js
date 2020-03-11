import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router, navigate } from '@reach/router';
import SearchForm from './components/SearchForm';
import People from './components/People';
import Planet from './components/Planet';
import Starships from './components/Starships';
import Species from './components/Species';
import Films from './components/Films';
import Axios from 'axios';


function App() {
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  const [query, setQuery] = useState({});
  const handleChange = (e) => {
    //name might come from input
    if(e.target.name === "search"){
      setSearch(e.target.value);
    }
    else if(e.target.name === "id"){
      setId(e.target.value)
    }
  }
  const handleSubmit = (e) => {
    //api call with axios can also be done here 
    //as well ass setting the state
    e.preventDefault();
    Axios.get(`https://swapi.co/api/${search}/${id}`)
    .then(response => {
      setQuery(response.data)})
    .then(navigate(`/${search}/${id}`))
    setSearch("");
    setId("");
  }

  return (
    <div className="App">
      <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} search={search} setSearch={setSearch} id={id} setId={setId} />
      <Router>
        <People path="/people/:id" query = {query}/>
        <Planet path="/planets/:id" query = {query}/>
        <Starships path="/starships/:id" query = {query}/>
        <Species path="/species/:id" query = {query}/>
        <Films path="/films/:id" query = {query}/>
      </Router>
    </div>
  );
}

export default App;
