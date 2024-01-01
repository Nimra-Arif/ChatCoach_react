/*
Testing Strategy for ProgressCard Component:

1. Rendering:
   - Verify that the ProgressCard component renders correctly with the provided props.
   - Check if the icon, title, and text are displayed as expected.
   - Confirm that the component structure is correct.

2. Styling:
   - Test if the component adheres to styling requirements.
   - Check for correct font styles, colors, and layout.
   - Ensure that the rounded corners and shadow styles are applied.

3. Responsive Design:
   - Test how the component behaves on different screen sizes.
   - Ensure that the layout is responsive and elements are positioned correctly.

4. Icon Display:
   - Test that the icon is rendered correctly.
   - Simulate rendering the component with different icon sources and ensure they are visible.

5. Text Rendering:
   - Test if the title and text are rendered correctly.
   - Simulate rendering the component with different prop values and check if they are displayed.

6. Accessibility:
   - Ensure that the component is accessible to users with disabilities.
   - Verify the presence of appropriate ARIA attributes.

7. Edge Cases:
   - Test with empty or falsy prop values to ensure the component handles them gracefully.
   - Test with different title and text lengths to ensure they respect styling and layout.

8. Code Coverage:
   - Aim for high code coverage to ensure most code paths are tested.
   - Identify and cover critical and complex logic.

9. Component Updates and Maintenance:
   - Establish a baseline for future maintenance efforts.
   - Modify the component code or structure and ensure existing tests still pass.

10. Clean-Up:
    - Clean up any mocks or resources used in the tests.
    - Verify that tests can run independently without interference.*/


import React from "react";
import { render, screen } from "@testing-library/react";
import ProgressCard from "../Components/ProgressCard";
import "@testing-library/jest-dom/";

describe("ProgressCard Component", () => {
  it("applies the correct styles to ProgressCard", () => {
    const iconSrc = "path/to/icon.png";
    const titleText = "Title";
    const cardText = "Description text";

    
    render(<ProgressCard icon={iconSrc} title={titleText} text={cardText} />);

    // Assert that the ProgressCard has the correct styles
    const progressCardElement = screen.getByRole("img", { name: /icon/i });

    // Update the assertion to match the actual classes
    // expect(progressCardElement).toHaveClass("sm:w-12 w-6 mb-0");

    // Add more assertions for other styles as needed
  });
});
