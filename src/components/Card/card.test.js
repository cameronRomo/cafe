import React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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

    expect(reservationName).toBeInTheDocument();
  })
})