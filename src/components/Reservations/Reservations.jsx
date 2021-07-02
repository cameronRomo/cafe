import React, { Component } from 'react';

import './Reservations.css';
import { getReservationData } from '../../services/apiCalls';
import Card from '../Card/Card';

class Reservations extends Component {
  constructor() {
    super();
    this.state = { 
      upcomingReservations: [],
     }
  }

  componentDidMount = async () => {
    await getReservationData()
    .then(reservations => this.setState({ upcomingReservations: reservations }))
  }

  render() { 
    const reservationCards = this.state.upcomingReservations.map(reservation => {
      return (
        <Card 
          id={ reservation.id }
          key={ reservation.id }
          name={ reservation.name }
          date={ reservation.date }
          time={ reservation.time }
          number={ reservation.number }
        />
      )
    })
    return (  
      <section className='reservations-container' >
        { reservationCards }
      </section>
    );
  }
}
 
export default Reservations;