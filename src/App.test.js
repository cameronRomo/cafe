import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Pagination from './components/common/Pagination';

describe('App', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
  })

  it('Should render "Turing Cafe Reservations" title', () => {
    const header = screen.getByRole('heading', {
      name: /turing cafe reservations/i
    })
    expect(header).toBeInTheDocument();
  })

  it('should display a button to add reservations', () => {
    const addReservationBtn = screen.getByRole('link', {
      name: /add a reservation/i
    })
    expect(addReservationBtn).toBeInTheDocument();
  })

  it('should switch to Back button when add reservation button is clicked', () => {
    const addReservationBtn = screen.getByRole('link', {
      name: /add a reservation/i
    })
    userEvent.click(addReservationBtn);

    const backButton = screen.getByRole('link', {
      name: /back/i
    })
    expect(backButton).toBeInTheDocument();
  })
})
