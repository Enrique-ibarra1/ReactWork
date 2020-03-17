import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main';
import ShowProduct from './views/ShowProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <ShowProduct path="product/:id" />
      </Router>
      
    </div>
  );
}

export default App;
