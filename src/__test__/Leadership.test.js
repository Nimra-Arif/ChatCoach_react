/*
Testing Strategy for Leadership Component:

1. Rendering:
   - Verify that the Leadership component renders correctly.
   - Check if the title, content, image, and button are displayed as expected.
   - Confirm that the component structure is correct.

2. Scroll Effect:
   - Ensure that the `useEffect` hook is correctly used to scroll to the top on component mount.
   - Mock the `window.scrollTo` method and check if it is called with the correct arguments.

3. Content and Styles:
   - Test if the component displays the leadership content accurately.
   - Verify the correct usage of font styles, sizes, and other CSS classes.
   - Ensure that the image is rendered with the correct alt text.

4. Button and Link:
   - Check if the "Get Expert Advice" button is displayed and has the correct styles.
   - Verify that the button triggers the expected action or navigation.
   - Confirm the presence of the email link and its correctness.

5. Code Coverage:
   - Aim for high code coverage to ensure most code paths are tested.
   - Identify and cover critical and complex logic related to rendering and styling.

6. Component Updates and Maintenance:
   - Establish a baseline for future maintenance efforts.
   - Modify the component code or structure and ensure existing tests still pass.

7. Clean-Up:
   - Clean up any mocks or resources used in the tests.
   - Verify that tests can run independently without interference.
*/

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Leadership from '../Components/Leadership';
import '@testing-library/jest-dom';

// Mock the window.scrollTo method
window.scrollTo = jest.fn();

jest.mock('../Assets/leader.svg', () => 'leader.svg');

describe('Leadership Component', () => {
  it('renders Leadership component with correct content', async () => {
    render(<Leadership />);

    // Wait for the component to settle after rendering
    await waitFor(() => {
      // Check if the Leadership content is rendered
      expect(screen.getByText('Leadership You Can Trust')).toBeInTheDocument();
      expect(
        screen.getByText(
          'We partner with visionaries like you to assist your business’ technological transformation on a massive scale — with logic, innovation, and emotion — beyond traditional problem-solving techniques and old-fashioned promises.'
        )
      ).toBeInTheDocument();
      
      // Check if 'Ahmad Riaz' is present
      const ahmadRiazElement = screen.getByText('Ahmad Riaz');
      expect(ahmadRiazElement).toBeInTheDocument();

      
      // Check if 'CEO & Founder ChatCoach' is present within the same parent as 'Ahmad Riaz'
      const founderElement = ahmadRiazElement.closest('.font-mont.font-semibold.lg\\:text-xl.text-lg.lg\\:py-5.py-2');

      expect(founderElement).toHaveTextContent('CEO & Founder ChatCoach');

      // Check if the link is present
      expect(
        screen.getByRole('link', { name: '+ Get Expert Advice' })
      ).toBeInTheDocument();
    });
  });

  
});
