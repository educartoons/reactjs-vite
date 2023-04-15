// import { describe, test, expect } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';
import Product from '../index';
import { beforeEach } from 'vitest';

beforeEach(() => {
  const product = {
    // id: uuidv4(),
    name: 'Nike Air Max Pulse',
    gender: 'hombre',
    colors: ['blanco'],
    price: 769.9,
    image: 'DR0453_001_A_PREM.jpeg',
  };
  render(<Product product={product} />);
});

describe('<Product />', () => {
  test('should render the product', () => {
    expect(screen.getByText('Nike Air Max Pulse')).toBeDefined();
  });

  test('should render the product with the outlined icon', () => {
    expect(screen.getByTestId('FavoriteBorderOutlinedIcon')).toBeDefined;
  });

  test('should render the outlined heart', () => {
    const button = screen.getByTestId('favorite-button');
    fireEvent.click(button);
    expect(screen.getByTestId('FavoriteIcon')).toBeDefined();
  });
});
