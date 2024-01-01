/*
Testing Strategy for Footer2 Component:

1. Rendering:
   - Verify that the Footer2 component renders correctly.
   - Check the presence of the logo with the correct alt text.

2. Links and Icons:
   - Test that the social media icons are rendered.
   - Confirm that the icons have the correct styles and classes.
   - Validate that each icon is a link to the respective social media page.

3. Navigation:
   - Wrap the component with MemoryRouter for navigation-related testing.
   - Test that the logo is a link to the home page ("/").

4. Styling:
   - Validate that the component has the correct background color.
   - Check if the cursor changes on hover for the icons.
   - Ensure the logo has the correct styling.

5. Code Coverage:
   - Aim for high code coverage to ensure most code paths are tested.
   - Identify and cover critical and complex logic related to rendering and behavior.

6. Component Updates and Maintenance:
   - Establish a baseline for future maintenance efforts.
   - Modify the component code or structure and ensure existing tests still pass.

7. Clean-Up:
   - Clean up any mocks or resources used in the tests.
   - Verify that tests can run independently without interference.
   */
  
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Footer2 from '../Components/Footer2';
import '@testing-library/jest-dom'; // Update this import
describe('Footer2 Component', () => {
  // Wrap the component with MemoryRouter
  const renderWithRouter = (ui) => {
    return render(<MemoryRouter>{ui}</MemoryRouter>);
  };

  
  it('renders the logo with the correct alt text', () => {
    renderWithRouter(<Footer2 />);
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  
});
