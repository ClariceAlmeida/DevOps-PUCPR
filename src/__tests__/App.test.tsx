import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import App from '../App';

describe('Componente de Login', () => {

  test('1. Deve exibir sucesso com dados corretos', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'eduardo.lino@pucpr.br' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: '123456' } });
    fireEvent.click(screen.getByText('Acessar'));
    expect(screen.getByText('Acessado com sucesso!')).toBeDefined();
  });

  test('2. Deve exibir erro com dados incorretos', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'errado@pucpr.br' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: '000000' } });
    fireEvent.click(screen.getByText('Acessar'));
    expect(screen.getByText('Usuário ou senha incorretos!')).toBeDefined();
  });

  test('3. Deve exibir erro ao clicar com campos vazios', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Acessar'));
    expect(screen.getByText('Usuário ou senha incorretos!')).toBeDefined();
  });

  test('4. Não deve exibir mensagem ao carregar a página', () => {
    render(<App />);
    const msg = document.getElementById('msg');
    expect(msg?.textContent).toBe('');
  });

  test('5. Deve conter o título de Login', () => {
    render(<App />);
    const titulo = screen.getByRole('heading', { name: /login/i });
    expect(titulo).toBeDefined();
  });

});