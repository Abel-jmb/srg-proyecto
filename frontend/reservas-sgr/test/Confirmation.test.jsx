import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Confirmation from '../src/pages/Confirmation'

describe('Página Confirmacion', () => {
  it('muestra el título de confirmación y el botón de volver', () => {
    render(
      <MemoryRouter>
        <Confirmation />
      </MemoryRouter>
    );

    expect(screen.getByText('¡Reserva Confirmada!')).toBeInTheDocument();
    expect(screen.getByText(/Gracias por reservar/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Volver al Inicio/i })).toBeInTheDocument();
  });
});