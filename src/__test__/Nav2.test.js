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
