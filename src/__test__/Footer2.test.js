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

  // ... Other test cases ...
});
