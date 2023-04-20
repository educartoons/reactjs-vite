import { render, screen } from '@testing-library/react';
import Filters from '../index';

const filters = ['Básquet', 'Urbano', 'Skateboarding', 'Lifestyle'];

describe('<Filters />', () => {
  render(<Filters filters={filters} />);

  test('Visualizar cada uno de los filtros', () => {});
});
