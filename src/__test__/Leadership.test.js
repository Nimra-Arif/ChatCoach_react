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

  // ... rest of the code
});
