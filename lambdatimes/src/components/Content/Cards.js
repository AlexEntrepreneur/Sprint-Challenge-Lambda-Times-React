import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {
        props.cards.map((card, index) => {
          return (
            <Card
              key={index}
              img={card.img}
              headline={card.headline}
              author={card.author}
            />
          );
        })
      }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;
