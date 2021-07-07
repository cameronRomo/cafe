import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './Reservations.css';
import { getReservationData, deleteReservation } from '../../services/apiCalls';
import Card from '../Card/Card';
import ReservationForm from '../ReservationForm/ReservationForm';
import Pagination from '../common/Pagination';

class Reservations extends Component {
  constructor() {
    super();
    this.state = { 
      upcomingReservations: [],
      totalReservations: 0,
      currentPage: 1,
      pageSize: 8,
     }
  }

  componentDidMount = async () => {
    await getReservationData()
    .then(reservations => this.setState({ upcomingReservations: reservations, totalReservations: reservations.length }))
  }

  handleDelete = async (deprecatedReservationId) => {
    const remainingReservations = this.state.upcomingReservations.filter(reservation => reservation.id !== deprecatedReservationId);
    this.setState({ upcomingReservations: remainingReservations })

    await deleteReservation(deprecatedReservationId);
  }

  render() { 
    const indexOfLastReservation = this.state.currentPage * this.state.pageSize;
    const indexOfFirstReservation = indexOfLastReservation - this.state.pageSize;
    const currentReservations = this.state.upcomingReservations.slice(indexOfFirstReservation, indexOfLastReservation)

    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    const reservationCards = currentReservations.map(reservation => {
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
      <>
        <Link to='/reservation-form' className='add-reservation-btn' >Add a reservation</Link>
        <Route path='/reservation-form' component={ ReservationForm }/>
        <section className='reservations-container' >
          { reservationCards }
        </section>
        <Pagination pageSize={this.state.pageSize} totalReservations={this.state.totalReservations} paginate={ paginate } />
      </>
    );
  }
}
 
export default Reservations;