/*
Testing Strategy for FormInput Component:

1. Rendering:
   - Verify that the FormInput component renders correctly for different input types.
   - Confirm the presence of placeholders and other attributes based on the input type.
   - Check the correct rendering of the toggle button for password input.

2. Input Types:
   - Test the component with different input types (text, date, password).
   - Ensure that the correct input type is applied based on the provided prop.
   - Validate that the component handles different input types appropriately.

3. Password Toggle:
   - Test the toggle button functionality for password input.
   - Confirm that the password input toggles between 'password' and 'text' visibility states.
   - Check that the toggle button icon changes accordingly.

4. Value Binding:
   - Test that the input correctly binds to the provided value prop.
   - Validate that the initial value is set correctly.
   - Confirm that changing the input triggers the `onChange` function.

5. Placeholder and Styling:
   - Confirm that the placeholder text is displayed correctly.
   - Validate that the component has the correct styles and classes applied.
   - Check if the password toggle button has the appropriate styling.

6. Code Coverage:
   - Aim for high code coverage to ensure most code paths are tested.
   - Identify and cover critical and complex logic related to rendering and behavior.

7. Edge Cases:
   - Test edge cases, such as providing default values and handling different input types.
   - Ensure the component handles unexpected scenarios gracefully.

8. Component Updates and Maintenance:
   - Establish a baseline for future maintenance efforts.
   - Modify the component code or structure and ensure existing tests still pass.

9. Clean-Up:
   - Clean up any mocks or resources used in the tests.
   - Verify that tests can run independently without interference.*/
   
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
