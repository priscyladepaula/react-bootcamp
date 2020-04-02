import React from 'react';
import { Link } from 'react-router-dom'

export default function NewPage() {
    return (
      <div className="App">
          <h1>Você chegou aqui!</h1>
          <h3><Link to="/">Voltar</Link></h3>
      </div>
    );
  }