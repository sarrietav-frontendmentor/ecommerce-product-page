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

  describe('test basket functionality', () => {
    it('opens the cart basket', () => {
      render(<Home />);

      const cartIcon = screen.getByTestId('cart-icon');
      fireEvent.click(cartIcon);

      expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    });
  });

  describe('test adding items to the cart', () => {
    const openCart = () => {
      const cartIcon = screen.getByTestId('cart-icon');
      fireEvent.click(cartIcon);
    };

    const addQuantity = (plusButton: HTMLElement, { times = 1 }) => {
      for (let i = 0; i < times; i++) fireEvent.click(plusButton);
    };

    const postToCart = (button = screen.getByRole('button')) => {
      fireEvent.click(button);
    };

    it("doesn't add items if the quantity is 0", () => {
      render(<Home />);

      postToCart();

      openCart();

      expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    });

    it('adds one item to the cart', () => {
      render(<Home />);

      const plusButton = screen.getByTestId('plus-icon');
      addQuantity(plusButton, { times: 1 });

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
        addQuantity(plusButton, { times: 5 });
        postToCart(button);
      }

      openCart();

      expect(
        screen.getAllByText('Autumn Limited Edition Sneakers').length,
      ).toBe(3);
    });
  });
});
