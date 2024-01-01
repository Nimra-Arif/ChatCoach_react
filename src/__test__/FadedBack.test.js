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
