import React from 'react';

import './Card.css';

const Card = ({ name, date, time, number }) => {
  return ( 
    <article className='card'>
      <h3>Name: { name }</h3>
      <p>Date: { date }</p>
      <p>Reservation Time: { time }</p>
      <p>Guests: { number }</p>
    </article>
   );
}
 
export default Card;