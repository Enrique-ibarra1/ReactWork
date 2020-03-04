import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jason" lastName="Gilzendorfenheim"
      age="35" hairColor="Black"/>
      <PersonCard firstName="Dan" lastName="Lieutenant"
      age="28" hairColor="Black"/>
      <PersonCard firstName="Gio" lastName="Uribe"
      age="23" hairColor="Black"/>
      <PersonCard firstName="Jeffery" lastName="Huh?"
      age="40" hairColor="Long"/>
    </div>
  );
}

export default App;
