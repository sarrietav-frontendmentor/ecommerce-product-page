import { fireEvent, render, screen } from '@testing-library/react';
import { BasketItem } from '../BasketItem';

describe('test BasketItem component', () => {
  const dispatch = jest.fn();
  const item = {
    id: '',
    image: '/image-product-1.jpg',
    name: 'Autumn Limited Edition Sneakers',
    price: 125.0,
    quantity: 5,
  };

  beforeEach(() => render(<BasketItem dispatch={dispatch} item={item} />));

  it('renders an image', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders the name correctly', () => {
    expect(screen.getByText(item.name)).toBeInTheDocument();
  });

  it('renders the base price correctly', () => {
    expect(screen.getByText('$125.00')).toBeInTheDocument();
  });

  it('renders the quantity correctly', () => {
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('renders the total price correctly', () => {
    expect(screen.getByText('$625.00')).toBeInTheDocument();
  });

  it('deletes itself', () => {
    const trashIcon = screen.getByTestId('trash-icon');

    fireEvent.click(trashIcon);

    expect(dispatch).toBeCalled();
  });
});
