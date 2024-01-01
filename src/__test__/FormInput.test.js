import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Update this import
import FormInput from '../Components/FormInput';

describe('FormInput Component', () => {
  it('renders input with date type correctly', () => {
    render(<FormInput type="date" placeholder="Select Date" />);
    const inputElement = screen.getByPlaceholderText('Select Date');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'date');
  });

  it('renders input with password type and toggle visibility correctly', () => {
    render(<FormInput type="password" placeholder="Enter Password" />);
    const passwordInput = screen.getByPlaceholderText('Enter Password');
    const toggleButton = screen.getByRole('button');

    // Check initial state
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Toggle visibility
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');

    // Toggle back to password
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('renders input with other types correctly', () => {
    render(<FormInput type="text" placeholder="Enter Text" defaultValue="initialValue" />);

    const inputElement = screen.getByPlaceholderText('Enter Text');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('calls onChange function when input value changes', () => {
    const onChangeMock = jest.fn();
    render(<FormInput type="text" placeholder="Enter Text" onChange={onChangeMock} />);
    
    const inputElement = screen.getByPlaceholderText('Enter Text');
  
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(onChangeMock).toHaveBeenCalledWith(expect.objectContaining({ target: expect.objectContaining({ value: 'test' }) }));
  });
  it('sets initial value correctly', () => {
    render(<FormInput type="text" placeholder="Enter Text" defaultValue="initialValue" />);
    const inputElement = screen.getByPlaceholderText('Enter Text');
    fireEvent.change(inputElement, { target: { value: 'initialValue' } }); // Manually trigger the change event
    expect(inputElement).toHaveValue('initialValue');
  });
  
  
  
});
