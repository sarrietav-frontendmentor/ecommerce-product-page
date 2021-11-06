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
});
