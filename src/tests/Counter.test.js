import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
    render(<Counter />);
});

test('renders counter message', () => {
    const counterMessage = screen.getByText(/count/i);
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    const initialCountValue = screen.getByText(/0/i);
    expect(initialCountValue).toBeInTheDocument();
});

test('clicking + increments the count', () => {
    const incrementButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(incrementButton);
    const incrementedValue = screen.getByText(/1/i);
    expect(incrementedValue).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
    const incrementButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(incrementButton);
    const decrementButton = screen.getByRole('button', { name: '-' });
    fireEvent.click(decrementButton);
    const decrementedValue = screen.getByText(/0/i);
    expect(decrementedValue).toBeInTheDocument();
});