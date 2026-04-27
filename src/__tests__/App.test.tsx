import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '../App';

test('deve exibir mensagem de sucesso com credenciais corretas', () => {
  render(<App />);

  
  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'eduardo.lino@pucpr.br' },
  });
  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: '123456' },
  });

  
  fireEvent.click(screen.getByText('Acessar'));

  const mensagem = screen.getByText('Acessado com sucesso!');
  expect(mensagem).toBeDefined();
});