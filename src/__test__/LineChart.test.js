/*
Testing Strategy for LineChart Component:

1. Rendering:
   - Verify that the LineChart component renders correctly.
   - Check if the title, subtitle, and the chart itself are displayed as expected.
   - Confirm that the component structure is correct.

2. Data and Labels:
   - Test if the component correctly receives and displays the provided data and labels.
   - Check if the chart displays the user and bot data with the specified colors.

3. Styling:
   - Test if the component adheres to styling requirements.
   - Check for correct background color, padding, and rounded corners.
   - Ensure that the chart's appearance matches the defined styles.

4. Chart Options:
   - Test if the chart responds to the provided options.
   - Check if the y-axis starts from 0, and its ticks follow the specified step size.
   - Confirm that the x-axis grid and ticks are correctly configured.

5. Responsiveness:
   - Test how the component behaves in different screen sizes.
   - Ensure that the chart remains responsive and maintains its aspect ratio.

6. Legend and Title:
   - Check if the legend is displayed at the bottom with the correct styling.
   - Verify that the title is displayed at the top of the chart.

7. Data Labels:
   - Test if data labels are displayed with the specified styles.
   - Check if they are positioned correctly and have the specified color.

*/
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
