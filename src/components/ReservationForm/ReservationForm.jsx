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
          <h3 className='reservation-form-header'>Reservation Details:</h3>
          <div className='form-group'>
            <label>Name:</label>
            <input 
              type='text'
              placeholder='First Name'
              name='name'
              value={ this.state.name }
              onChange={ event => this.handleInput(event)}
            />
          </div>
          <div className='form-group'>
            <label>Date:</label>
            <input 
              type='text'
              placeholder='mm/dd'
              name='date'
              value={ this.state.date }
              onChange={ event => this.handleInput(event) }
            />
          </div>
          <div className='form-group'>
            <label>Time:</label>
            <input 
              type='text'
              placeholder='00:00'
              name='time'
              value={ this.state.time }
              onChange={ event => this.handleInput(event)}
            />
          </div>
          <div className='form-group'>
            <label>Number of Guests</label>
            <select
              // multiple
              className='form-control' 
              type='number'
              placeholder='Number of Guests'
              name='number'
              value={ this.state.number }
              onChange={ event => this.handleInput(event)}
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <button onClick={ event => this.handleSubmit(event) } className='submit-btn'>Submit Reservation</button>
        </form>
      </>
     );
  }
}
 
export default ReservationForm;