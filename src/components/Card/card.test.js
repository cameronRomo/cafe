import React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import { MemoryRouter } from 'react-router-dom';

describe('Reservation Card', () => {
  beforeEach(() => {

    render(
      <MemoryRouter>
        <Card
          id={1}
          name={'Christie'}
          date={'12/29'}
          time={'7:00'}
          number={12}
          onDelete={jest.fn()}
        />
      </MemoryRouter>
    )
  })

  it('should render a reservation card with a name, date, time, number of guests, and delete button', async () => {
    const reservationName = await waitFor(() => screen.getByText(/Name: Christie/i));
    const reservationDate = await waitFor(() => screen.getByText(/date: 12\/29/i));
    const reservationTime = await waitFor(() => screen.getByText(/Reservation Time: 7:00/i));
    const numberOfGuests = await waitFor(() => screen.getByText(/guests: 12/i));
    const deleteButton = await waitFor(() => screen.getByRole('button', {name: /Delete Reservation/i}))

    expect(reservationName).toBeInTheDocument();
    expect(reservationDate).toBeInTheDocument();
    expect(reservationTime).toBeInTheDocument();
    expect(numberOfGuests).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  })
})