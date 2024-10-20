import React, { useState } from 'react';
import Card from '../Cards/Cards'; 
import CardForm from '../CardForm/CardForm'; 

const CardList = () => {
  const [cardsData, setCardsData] = useState([
    
  ]);

  const addCard = (newCard) => {
    setCardsData((prevCards) => [...prevCards, newCard]); 
  };

  return (
    <div>
      <h1 className="my-4">Faça seu cadastro para garantir a vaga no Entreveiro!</h1>
      <CardForm addCard={addCard} /> {}
      {cardsData.map((card, index) => (
        <div className="d-inline-flex"> 
        <Card
        key={index}
        image={card.image}
        title={card.title}
        description={card.description}
        question1={card.question1}
        question2={card.question2}
      /></div>
      ))}
    </div>
  );
};

export default CardList;

  
  