import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Product from '../index';

// beforeEach(() => {
//   const product = {
//     name: 'Nike Air Max Pulse',
//     gender: 'hombre',
//     colors: ['blanco'],
//     price: 769.9,
//     image: 'DR0453_001_A_PREM.jpeg',
//   };
//   render(<Product product={product} />);
//   return () => {
//     cleanup();
//   };
// });

describe('<Product />', () => {
  const product = {
    name: 'Nike Air Max Pulse',
    gender: 'hombre',
    colors: ['blanco'],
    price: 769.9,
    image: 'DR0453_001_A_PREM.jpeg',
  };
  render(<Product product={product} />);

  test('always shows its product name', () => {
    expect(screen.getByText('Nike Air Max Pulse')).toBeDefined();
  });

  test('always shows its price', () => {
    expect(screen.getByText('S/ 769.90')).toBeDefined();
  });
});
