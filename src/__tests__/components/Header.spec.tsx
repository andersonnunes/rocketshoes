import { describe, it, expect, vi } from 'vitest';
import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from '../../components/Header';

vi.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: ReactNode }) => children
  }
});

vi.mock('../../hooks/useCart', () => {
  return {
    useCart: () => ({
      cart: [
        {
          amount: 2,
          id: 1,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          price: 179.9,
          title: 'Tênis de Caminhada Leve Confortável',
        },
        {
          amount: 1,
          id: 2,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
          price: 139.9,
          title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        },
      ],
    })
  };
});

describe('Header Component', () => {
  it('should be able to render the amount of products added to cart', () => {
    render(<Header />);

    expect(screen.getByTestId('cart-size')).toHaveTextContent('2 itens');
  });
});
