import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from '../Sidebar';

describe('test Sidebar component', () => {
  const func = jest.fn();
  it('closes when clicking the close button', () => {
    render(<Sidebar setShown={func} />);

    const closeButton = screen.getByTestId("close-icon");

    fireEvent.click(closeButton);

    expect(func).toBeCalled()
  });

  it('closes when clicking the overlay', () => {
    render(<Sidebar setShown={func} />);

    const overlay = screen.getByTestId("sidebar-overlay");

    fireEvent.click(overlay);

    expect(func).toBeCalled()
  });
});
