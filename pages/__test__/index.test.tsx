import { fireEvent, render, screen } from '@testing-library/react';
import Home from '..';

describe('test application', () => {
  describe('test sidebar functionlity', () => {
    it('renders without the sidebar', () => {
      render(<Home />);

      expect(screen.queryByText('Collections')).not.toBeInTheDocument();
      expect(screen.queryByText('Men')).not.toBeInTheDocument();
      expect(screen.queryByText('Women')).not.toBeInTheDocument();
      expect(screen.queryByText('About')).not.toBeInTheDocument();
      expect(screen.queryByText('Contact')).not.toBeInTheDocument();
    });

    it('opens the sidebar when clicking the menu icon', () => {
      render(<Home />);

      const menuIcon = screen.getByTestId('menu-icon');
      fireEvent.click(menuIcon);

      expect(screen.getByText('Collections')).toBeInTheDocument();
      expect(screen.getByText('Men')).toBeInTheDocument();
      expect(screen.getByText('Women')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('closes the sidebar', () => {
      render(<Home />);

      const menuIcon = screen.getByTestId('menu-icon');
      fireEvent.click(menuIcon);

      const closeIcon = screen.getByTestId('close-icon');
      fireEvent.click(closeIcon);

      expect(screen.queryByText('Collections')).not.toBeInTheDocument();
      expect(screen.queryByText('Men')).not.toBeInTheDocument();
      expect(screen.queryByText('Women')).not.toBeInTheDocument();
      expect(screen.queryByText('About')).not.toBeInTheDocument();
      expect(screen.queryByText('Contact')).not.toBeInTheDocument();
    });
  });

  describe('test adding items to the cart', () => {
    it("doesn't add items if the quantity is 0", () => {
      render(<Home />);

      postToCart();

      openCart();

      expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    });

    it('adds one item to the cart', () => {
      render(<Home />);

      const plusButton = screen.getByTestId('plus-icon');
      addQuantity(plusButton);

      postToCart();

      openCart();

      expect(screen.queryByText('Your cart is empty.')).not.toBeInTheDocument();
      expect(
        screen.getByText('Autumn Limited Edition Sneakers'),
      ).toBeInTheDocument();
    });

    it('adds multiple items to the cart', () => {
      render(<Home />);

      const plusButton = screen.getByTestId('plus-icon');
      const button = screen.getByRole('button');

      for (let i = 0; i < 3; i++) {
        addQuantity(plusButton);
        postToCart(button);
      }

      openCart();

      expect(
        screen.getAllByText('Autumn Limited Edition Sneakers').length,
      ).toBe(3);
    });
  });

  describe('test removing items from the cart', () => {
    it('deletes one item from the cart', () => {
      render(<Home />);

      const plusButton = screen.getByTestId('plus-icon');
      const button = screen.getByRole('button');

      for (let i = 0; i < 3; i++) {
        addQuantity(plusButton);
        postToCart(button);
      }

      openCart();

      const trashIcon = screen.getAllByTestId('trash-icon')[0];
      fireEvent.click(trashIcon);

      expect(
        screen.getAllByText('Autumn Limited Edition Sneakers').length,
      ).toBe(2);
    });
  });

  describe('test basket functionality', () => {
    it('opens the cart basket', () => {
      render(<Home />);

      const cartIcon = screen.getByTestId('cart-icon');
      fireEvent.click(cartIcon);

      expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    });

    it('checks out the cart', () => {
      render(<Home />);

      const plusButton = screen.getByTestId('plus-icon');
      const button = screen.getByRole('button');

      addQuantity(plusButton);
      postToCart(button);

      openCart();

      const checkOutButton = screen.getByText('Checkout');
      fireEvent.click(checkOutButton);

      expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    });
  });
});

const openCart = () => {
  const cartIcon = screen.getByTestId('cart-icon');
  fireEvent.click(cartIcon);
};

const addQuantity = (plusButton: HTMLElement) => {
  fireEvent.click(plusButton);
};

const postToCart = (button = screen.getByRole('button')) => {
  fireEvent.click(button);
};
