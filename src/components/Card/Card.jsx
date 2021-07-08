import React from 'react';

import './Card.css';

const Card = ({ id, name, date, time, number, onDelete }) => {

  return ( 
    <div className='container'>
      <article className='reservation-card'>
        <h3 className='card-name'>Name: { name }</h3>
        <p>Date: { date }</p>
        <p>Reservation Time: { time }</p>
        <p>Guests: { number }</p>
        <button onClick={ () => onDelete(id) } className='delete-reservation-btn' >Delete Reservation</button>
      </article>
    </div>
   );
}
 
export default Card;