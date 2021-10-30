import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './shared/components/Navbar/navbar';

function App() {
  return (
    <div className='App flex'>
      <Navbar />
      <h1 className='text-5xl text-red-500'>Phsyc</h1>
    </div>
  );
}

export default App;
