import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi, describe, test, expect, beforeEach } from 'vitest'
import Login from '../pages/Login'

// 1. Criamos a função mockada fora para termos controle total
const signInMock = vi.fn();

vi.mock('../Firebase', () => ({
  default: {
    auth: () => ({
      signInWithEmailAndPassword: signInMock,
    }),
  },
}));

// 2. Simulamos o alert do navegador
window.alert = vi.fn();

describe('Componente de Login', () => {
  
  // Limpa o histórico de chamadas antes de cada teste
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('deve exibir erro se os campos estiverem vazios', async () => {
    render(
      <MemoryRouter>
       <Login />
      </MemoryRouter>
    );

    const botaoAcessar = screen.getByText(/Acessar/i);
    fireEvent.click(botaoAcessar);

    expect(window.alert).toHaveBeenCalledWith("Preencha todos os campos!");
  });

  test('deve chamar o login do firebase com os dados corretos', async () => {
    // Definimos que o login vai dar certo
    signInMock.mockResolvedValue({ user: { uid: '123' } });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    // Preenche os campos
    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: 'teste@email.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: '123456' },
    });

    fireEvent.click(screen.getByText(/Acessar/i));

    // O waitFor é essencial aqui por causa do async/await no componente
    await waitFor(() => {
      expect(signInMock).toHaveBeenCalledWith('teste@email.com', '123456');
    });
  });
});