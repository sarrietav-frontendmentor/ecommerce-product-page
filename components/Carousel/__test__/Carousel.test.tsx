import { fireEvent, render, screen } from '@testing-library/react';
import { Carousel } from '../Carousel';

describe('test Carousel component', () => {
  it('renders with initial image', () => {
    render(<Carousel />);
    const image = screen.getByRole('img');

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('image-product-1.jpg'),
    );
  });

  it('renders the last image when clicking the back button', () => {
    render(<Carousel />);
    const backButton = screen.getByTestId('back-icon');

    fireEvent.click(backButton);
    const image = screen.getByRole('img');

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('image-product-4.jpg'),
    );
  });

  it('renders the second image when clicking the next button', () => {
    render(<Carousel />);
    const nextButton = screen.getByTestId('next-icon');

    fireEvent.click(nextButton);
    const image = screen.getByRole('img');

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('image-product-2.jpg'),
    );
  });

  it('renders the third image', () => {
    render(<Carousel />);
    const nextButton = screen.getByTestId('next-icon');

    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    const image = screen.getByRole('img');

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('image-product-3.jpg'),
    );
  });

  it('goes full circle', () => {
    render(<Carousel />);
    const nextButton = screen.getByTestId('next-icon');

    for (let i = 0; i < 4; i++) fireEvent.click(nextButton);
    const image = screen.getByRole('img');

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('image-product-1.jpg'),
    );
  });
});
