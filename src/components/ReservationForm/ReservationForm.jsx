import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import { updateReservations } from '../../services/apiCalls';
import './ReservationForm.css'
import Reservations from '../Reservations/Reservations';

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      date: "",
      time: "",
      number: ""
    }
  }

  addReservation = async (newReservation) => {
    await updateReservations(newReservation);
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClearInputs = () => {
    this.setState({
      name: "",
      date: "",
      time: "",
      number: "",
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newReservation = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: Number(this.state.number)
    }
    
    this.addReservation(newReservation);
    this.handleClearInputs();
  }

  render() { 
    return ( 
      <>
        <Link to='/reservations' className='back-btn' >Back</Link>
        <Route path='/reservations' component={ Reservations } />
        <form className='form-container'>
          <h3>Reservation Details:</h3>
          <input 
            type='text'
            placeholder='Reservation Name'
            name='name'
            value={ this.state.name }
            onChange={ event => this.handleInput(event)}
          />
          <input 
            type='text'
            placeholder='Date (mm/dd)'
            name='date'
            value={ this.state.date }
            onChange={ event => this.handleInput(event) }
          />
          <input 
            type='text'
            placeholder='Time'
            name='time'
            value={ this.state.time }
            onChange={ event => this.handleInput(event)}
          />
          <input 
            type='number'
            placeholder='Number of Guests'
            name='number'
            value={ this.state.number }
            onChange={ event => this.handleInput(event)}
          />
          <button onClick={ event => this.handleSubmit(event) } className='submit-btn'>Submit Reservation</button>
        </form>
      </>
     );
  }
}
 
export default ReservationForm;