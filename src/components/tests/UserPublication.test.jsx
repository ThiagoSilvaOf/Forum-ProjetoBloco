import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserPublication from '../../pages/UserPublication';

beforeAll(() => {
  global.Storage.prototype.setItem = jest.fn();
  global.Storage.prototype.getItem = jest.fn(() => 'testUser');
});

jest.mock('react-toastify', () => {
  return {
    toast: jest.fn()
  };
});

describe('UserPublication Component', () => {
  test('deve criar uma nova postagem ao clicar no botão enviar', () => {
    render(<UserPublication />);

    
    const input = screen.getByPlaceholderText(/No que você está pensando hoje, testUser\?/i);
    fireEvent.change(input, { target: { value: 'Meu novo post' } });

    
    const button = screen.getByRole('button');
    fireEvent.click(button);

  
    expect(screen.getByText('Meu novo post')).toBeInTheDocument();
  });
});
