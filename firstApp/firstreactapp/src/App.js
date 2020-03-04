import React from 'react';
import logo from './logo.svg';
import './App.css';
import SomeClassComponent from './components/SomeClassComponent';
function App() {
  return (
    <div className="App">
      <SomeClassComponent someText="This is a component"/>
      <SomeClassComponent someText="Hello Timmy"/>
    </div>
  );
}

export default App;
