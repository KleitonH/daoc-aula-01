import React from 'react';
import './Cards.css';

const Card = ({ image, title, description,question1,question2 }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image"/>
      <div className="card-content">
        <h2 className="card-title pt-4">{title}</h2>
        <p className="card-description">{description}</p>
        <p className='question1'>{question1}</p>
        <p className='question2'>{question2}</p>

      </div>
    </div>
  );
};

export default Card;
