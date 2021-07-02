import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

import './App.css';
import ReservationForm from './components/ReservationForm/ReservationForm';
import Reservations from './components/Reservations/Reservations';

const App = () => {
  return ( 
    <React.Fragment>
      <main className='App'>
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Link to='/reservation-form' className='add-reservation-btn' >Add a reservation</Link>
        <Switch>
          <Route path='/reservation-form' component={ ReservationForm }/>
          <Route path='/reservations' component={ Reservations } />
          <Redirect from='/' exact to='/Reservations' />
        </Switch>
      </main>
    </React.Fragment>
   );
}
 
export default App;