import React from 'react';
import './App.css';
import CepComponent from './cep/Cep.component';

function App() {
  return (
    <div className='box'>
      <h1 className='title is-1'>Busca cep!</h1>
      <CepComponent/>
    </div>
  );
}

export default App;
