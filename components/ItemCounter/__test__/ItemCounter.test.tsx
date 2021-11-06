import { fireEvent, render, screen } from '@testing-library/react';
import { ItemCounter } from '@/components/ItemCounter/ItemCounter';
import { MockContext } from '@/utils/mock-context';

describe('test ItemCounter component', () => {
  beforeEach(() => {
    render(
      <MockContext>
        <ItemCounter />
      </MockContext>,
    );
  });

  it('should render with 0', () => {
    const spanElement = screen.getByText('0');

    expect(spanElement).toBeInTheDocument();
  });

  it('should initially stay in 0 when clicking the minus button', () => {
    const minusIconElement = screen.getByTestId('minus-icon');

    fireEvent.click(minusIconElement);

    const spanElement = screen.getByText('0');

    expect(spanElement).toBeInTheDocument();
  });

  it('should increment when clicking the plus button', () => {
    const plusIconElement = screen.getByTestId('plus-icon');

    fireEvent.click(plusIconElement);

    const spanElement = screen.getByText('1');

    expect(spanElement).toBeInTheDocument();
  });

  it('should decrement when clicking the minus button', () => {
    const minusIconElement = screen.getByTestId('minus-icon');
    const plusIconElement = screen.getByTestId('plus-icon');

    // Click plus three times
    for (let i = 0; i < 3; i++) fireEvent.click(plusIconElement);

    // Click minus one time
    fireEvent.click(minusIconElement);

    const spanElement = screen.getByText('2');

    expect(spanElement).toBeInTheDocument();
  });
});
