import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1><Link to="/new-page">Clique aqui!</Link></h1>
    </div>
  );
}

export default App;
