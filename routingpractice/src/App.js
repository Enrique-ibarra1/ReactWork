import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Home path="/home/" greeting="Welcome"/>
        <Number path="/:id/"/>
        <Hello path="/hello/:word/:text/:bg"/>
        <Hello path="/hello/:word"/>
      </Router>
    </div>
  );
}
export default App;
