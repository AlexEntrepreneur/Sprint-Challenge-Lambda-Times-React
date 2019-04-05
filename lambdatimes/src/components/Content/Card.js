import React from 'react';
import { string } from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} alt={props.author} />
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: string.isRequired,
  headline: string.isRequired,
  author: string.isRequired
}

export default Card;
