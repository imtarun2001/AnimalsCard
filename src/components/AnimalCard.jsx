import React, { useState } from 'react';
import './AnimalCard.css';

function AnimalCard({id,name,species,description,image,removeAnimal}) {

  const [readmore,setReadmore] = useState(false);

  let info = readmore ? `${description}...` : `${description.slice(0,150)}...`;
  function readmoreHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className='animal-card'>
          <img src={image} alt="couldn't found" className='image'></img>
          <div className='info'>
              <div className='name'>{name} :</div>
              <div className='specie'>({species})</div>
          </div>
          <div className='description'>
              {info}
              <span onClick={readmoreHandler} className='read-more'>{readmore ? `show less`:`read more`}</span>
          </div>
          <button className='hide-btn' onClick={() => {removeAnimal(id)}}>HIDE</button>
    </div>
  )
}

export default AnimalCard