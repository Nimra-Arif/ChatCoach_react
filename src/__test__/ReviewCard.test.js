/*
Testing Strategy for ReviewCard Component:

1. Rendering:
   - Verify that the ReviewCard component renders correctly with the provided props.
   - Check if the name, company, and text are displayed as expected.
   - Confirm that the component structure is correct.

2. Styling:
   - Test if the component adheres to styling requirements.
   - Check for correct font styles, colors, and layout.

3. Responsive Design:
   - Test how the component behaves on different screen sizes.
   - Ensure that the layout is responsive and elements are positioned correctly.

4. Star Image:
   - Test that the star image is rendered.
   - Simulate rendering the component with different star images and ensure they are visible.

5. Text Rendering:
   - Test if the text, name, and company are rendered correctly.
   - Simulate rendering the component with different prop values and check if they are displayed.

6. About Page Condition:
   - Test if the component behaves correctly based on whether it is on the "about" page.
   - Simulate rendering the component on the "about" page and ensure styles are updated accordingly.

7. Accessibility:
   - Ensure that the component is accessible to users with disabilities.
   - Verify the presence of appropriate ARIA attributes.

8. Edge Cases:
   - Test with empty or falsy prop values to ensure the component handles them gracefully.
   - Test with different company names and ensure they are rendered correctly.

9. Code Coverage:
   - Aim for high code coverage to ensure most code paths are tested.
   - Identify and cover critical and complex logic.
*/
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import ReviewCard from "../Components/ReviewCard";

// Mock useLocation
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/about", // Set the pathname to match your test case
  }),
}));

describe("ReviewCard Component", () => {
  const defaultProps = {
    name: "John Doe",
    company: "ABC Corp",
    text: "Sample review text",
  };

  it("renders review card with provided props", () => {
    render(
      <Router>
        <ReviewCard {...defaultProps} />
      </Router>
    );
  
    // Check if the name, company, and text are rendered
    expect(screen.getByText(/"Sample review text"/)).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("ABC Corp")).toBeInTheDocument();
  
    // Check if the stars image is rendered
    expect(screen.getByAltText("stars")).toBeInTheDocument();
  });
  
});
