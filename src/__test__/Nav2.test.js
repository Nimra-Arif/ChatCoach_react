
/*
Testing Strategy for Nav2 Component:

1. Rendering:
   - Verify that the Nav2 component renders correctly.
   - Check if the logo is displayed as expected.
   - Confirm that the component structure is correct.

2. Navigation Link:
   - Test that the logo is a link leading to the home page ("/").
   - Simulate clicking the logo link and ensure it navigates to the correct destination.

3. Styling:
   - Test if the component adheres to styling requirements.
   - Check for correct background color, padding, and logo styles.
   - Ensure the cursor changes on hover.

4. Accessibility:
   - Ensure that the component is accessible to users with disabilities.
   - Verify the presence of appropriate ARIA attributes.

5. Code Coverage:
   - Aim for high code coverage to ensure most code paths are tested.
   - Identify and cover critical and complex logic.

6. Component Updates and Maintenance:
   - Establish a baseline for future maintenance efforts.
   - Modify the component code or structure and ensure existing tests still pass.

7. Clean-Up:
    - Clean up any mocks or resources used in the tests.
    - Verify that tests can run independently without interference.
*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav2 from '../Components/Nav2';
import '@testing-library/jest-dom';

describe('Nav2 Component', () => {
  it('renders Nav2 component with logo', () => {
    render(
      <MemoryRouter>
        <Nav2 />
      </MemoryRouter>
    );

    // Check if the logo is rendered and is a link to "/"
    const logoLink = screen.getByRole('link', { name: /logo/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');

    // Check if the logo image is rendered
    const logoImage = screen.getByAltText('logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', expect.stringContaining('logo.svg'));
  });

  it('renders Nav2 component without crashing', () => {
    render(
      <MemoryRouter>
        <Nav2 />
      </MemoryRouter>
    );

    // Check if the component renders without crashing
    expect(screen.getByRole('link', { name: /logo/i })).toBeInTheDocument();
  });
});
