/*
Testing Strategy for FadedBack Component:

1. Rendering:
   - Verify that the FadedBack component renders correctly.
   - Check the presence of the image with the correct alt text and source.

2. Image Attributes:
   - Test that the image has the correct alt text ('graph').
   - Validate that the image has the correct source ('chatcoach-back12.png').

3. Styling:
   - Confirm that the component exhibits the expected styling.
   - If there are CSS classes or styles, ensure they are applied correctly.

4. Component Updates and Maintenance:
   - Establish a baseline for future maintenance efforts.
   - Modify the component code or structure and ensure existing tests still pass.

5. Clean-Up:
   - Clean up any mocks or resources used in the tests.
   - Verify that tests can run independently without interference.*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import FadedBack from '../Components/FadedBack';
import '@testing-library/jest-dom'; // Add this import for custom Jest matchers


describe('FadedBack Component', () => {
  it('renders the image with the correct alt text', () => {
    render(<FadedBack />);
    const imageElement = screen.getByAltText('graph');
    expect(imageElement).toBeInTheDocument();
  });

  it('renders the image with the correct source', () => {
    render(<FadedBack />);
    const imageElement = screen.getByAltText('graph');
    expect(imageElement).toHaveAttribute('src', 'chatcoach-back12.png');
  });
  
});
