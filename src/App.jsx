import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import animalsData from './animalsdata';

function App() {

  const [animals,setAnimals] = useState(animalsData);

  function removeAnimal(id) {
    const newInterface = animals.filter(animal => animal.id !== id);
    setAnimals(newInterface);
  }

  if(animals.length===0) {
    return(
      <div className='empty-interface'>
          <h2 className='nothing'>Nothing to Show</h2>
          <button className='refresh-btn' onClick={() => setAnimals(animalsData)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className='root'>
      <Home animals={animals} removeAnimal={removeAnimal}></Home>
    </div>
  )
}

export default App;