import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';

describe('', () => {
  const mockShowCartBasket = jest.fn();
  const mockShowSidebar = jest.fn();

  it('opens the basket when clicking the basket', () => {
    render(
      <Navbar
        showCartBasket={mockShowCartBasket}
        showSidebar={mockShowSidebar}
        cartBasketShown={false}
      />,
    );

    const cartIcon = screen.getByTestId('cart-icon');

    fireEvent.click(cartIcon);

    expect(mockShowCartBasket).toBeCalled();
  });

  it('opens the sidebar when clicking the menu', () => {
    render(
      <Navbar
        showCartBasket={mockShowCartBasket}
        showSidebar={mockShowSidebar}
        cartBasketShown={false}
      />,
    );

    const menuIcon = screen.getByTestId('menu-icon');

    fireEvent.click(menuIcon);

    expect(mockShowSidebar).toBeCalled();
  });
});
