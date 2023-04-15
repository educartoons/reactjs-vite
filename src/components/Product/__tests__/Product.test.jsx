import { render, screen, fireEvent } from '@testing-library/react';
import Product from '../index';

beforeEach(() => {
  const product = {
    name: 'Nike Air Max Pulse',
    gender: 'hombre',
    colors: ['blanco'],
    price: 769.9,
    image: 'DR0453_001_A_PREM.jpeg',
  };
  render(<Product product={product} />);
});

describe('<Product />', () => {
  const product = {
    name: 'Nike Air Max Pulse',
    gender: 'hombre',
    colors: ['blanco'],
    price: 769.9,
    image: 'DR0453_001_A_PREM.jpeg',
  };

  test('always shows its product name', () => {
    expect(screen.getByText('Nike Air Max Pulse')).toBeDefined();
  });

  test('always shows its price', () => {
    expect(screen.getByText('S/ 769.90')).toBeDefined();
  });

  test('the default value of favorite icon is outlined heart icon', () => {
    expect(screen.getByTestId('FavoriteBorderOutlinedIcon')).toBeDefined();
  });

  test('when the user clicks on favorite button, the icon changes to filled heart', () => {
    const button = screen.getByTestId('favorite-button');

    fireEvent.click(button);

    expect(screen.getByTestId('FavoriteIcon')).toBeDefined();
  });

  test('when the user clicks on favorite button it returns the outlined icon if the icon is filled', () => {
    const button = screen.getByTestId('favorite-button');

    fireEvent.click(button);

    fireEvent.click(button);

    expect(screen.getByTestId('FavoriteBorderOutlinedIcon')).toBeDefined();
  });
});
