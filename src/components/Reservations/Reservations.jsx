import React, { Component } from 'react';

import './Reservations.css';
import { getReservationData, deleteReservation } from '../../services/apiCalls';
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

  handleDelete = async (deprecatedReservationId) => {
    const remainingReservations = this.state.upcomingReservations.filter(reservation => reservation.id !== deprecatedReservationId);
    this.setState({ upcomingReservations: remainingReservations })

    await deleteReservation(deprecatedReservationId);
    console.log(deprecatedReservationId);
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
          onDelete={ this.handleDelete }
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