// import { describe, test, expect } from 'vitest';

import { render, screen } from '@testing-library/react';
import Product from '../index';

describe('<Product />', () => {
  const product = {
    // id: uuidv4(),
    name: 'Nike Air Max Pulse',
    gender: 'hombre',
    colors: ['blanco'],
    price: 769.9,
    image: 'DR0453_001_A_PREM.jpeg',
  };

  test('should render the product', () => {
    render(<Product product={product} />);
    expect(screen.getByText('Nike Air Max Pulse')).toBeDefined();
  });
});
