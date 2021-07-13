import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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
})
