import React from 'react';
import AnimalCard from './AnimalCard';
import './Home.css';

function Home({animals,removeAnimal}) {
  return (
    <div className='home'>
      <h2 className='title'>Mesmerizing Creatures</h2>
      <div className='cards'>
        {
          animals.map( (animal) => {

            return <AnimalCard key={animal.id} {...animal} removeAnimal={removeAnimal}></AnimalCard>;

          })
        }
      </div>
    </div>
  )
}

export default Home;