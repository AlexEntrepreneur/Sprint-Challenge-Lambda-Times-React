import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
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

Cards.propTypes = {
  cards: arrayOf(shape({
    tab: string,
    img: string,
    headline: string,
    author: string
  })).isRequired
}
export default Cards;
