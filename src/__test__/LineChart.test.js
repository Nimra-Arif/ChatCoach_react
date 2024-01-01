import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LineChart from '../Components/LineChart';

// Mock the react-chartjs-2 module
jest.mock('react-chartjs-2', () => ({
  Line: () => <div data-testid="mock-line-chart" />,
}));

const mockData = {
  title: 'Mock Title',
  subTitle: 'Mock Subtitle',
  labels: ['Jan', 'Feb', 'Mar'],
  userData: [10, 20, 30],
  botData: [5, 15, 25],
};

describe('LineChart Component', () => {
  it('renders LineChart component with provided props', () => {
    render(<LineChart {...mockData} />);
    // Check if the LineChart component is rendered
    const chart = screen.getByTestId('mock-line-chart');
    expect(chart).toBeInTheDocument();
  });

  it('renders LineChart component with correct data and options', () => {
    render(<LineChart {...mockData} />);
    // Add your assertions here based on the mocked Line component
  });
});
