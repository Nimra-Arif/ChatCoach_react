/*
Testing Strategy for Review Component:

1. Rendering:
   - Verify that the Review component renders correctly with the provided props.
   - Check if the text, age, name, hobby, and avatar are displayed as expected.
   - Confirm that the component structure is correct.

2. Styling:
   - Test if the component adheres to styling requirements.
   - Check for correct font styles, colors, and layout.
   - Ensure that the avatar is positioned and styled appropriately.

3. Responsive Design:
   - Test how the component behaves on different screen sizes.
   - Ensure that the layout is responsive and elements are positioned correctly.

4. Avatar Visibility:
   - Test that the avatar is displayed when the component is rendered.
   - Simulate rendering the component with different avatar URLs and ensure they are visible.

5. Text Rendering:
   - Test if the text, age, name, and hobby are rendered correctly.
   - Simulate rendering the component with different prop values and check if they are displayed.

6. Accessibility:
   - Ensure that the component is accessible to users with disabilities.
   - Verify the presence of appropriate ARIA attributes.

7. Edge Cases:
   - Test with empty or falsy prop values to ensure the component handles them gracefully.
   - Test with a long text to ensure it respects styling and layout.

8. Code Coverage:
   - Aim for high code coverage to ensure most code paths are tested.
   - Identify and cover critical and complex logic.

9. Component Updates and Maintenance:
   - Establish a baseline for future maintenance efforts.
   - Modify the component code or structure and ensure existing tests still pass.

10. Clean-Up:
    - Clean up any mocks or resources used in the tests.
    - Verify that tests can run independently without interference.


*/


import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Update this import
import Review from "../Components/Review";

describe("Review Component", () => {
  const defaultProps = {
    text: "Sample review text",
    age: 25,
    name: "John Doe",
    hobby: "Reading",
    avatar: "path/to/avatar.jpg",
  };

  it("renders review component with provided props", () => {
    render(<Review {...defaultProps} />);

    // Check if the text, age, name, and hobby are rendered
    expect(screen.getByText("Sample review text")).toBeInTheDocument();
    expect(screen.getByText("25 Years of age")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Reading.")).toBeInTheDocument();

    // Check if the avatar is rendered
    expect(screen.getByAltText("avatar")).toBeInTheDocument();
  });

  it("renders review component with different props", () => {
    const differentProps = {
      text: "Another review text",
      age: 30,
      name: "Jane Smith",
      hobby: "Traveling",
      avatar: "path/to/another-avatar.jpg",
    };

    render(<Review {...differentProps} />);

    // Check if the different text, age, name, and hobby are rendered
    expect(screen.getByText("Another review text")).toBeInTheDocument();
    expect(screen.getByText("30 Years of age")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("Traveling.")).toBeInTheDocument();

    // Check if the different avatar is rendered
    expect(screen.getByAltText("avatar")).toBeInTheDocument();
  });
});
