/*Testing Strategy for Subscribe Component:

1. Functional Testing:
   - Verify that the Subscribe component renders correctly with all expected elements.
   - Check if the main heading, subheading, email input field, and subscribe button are present.

2. Email Input Handling:
   - Test that the email input field handles user input correctly.
   - Enter a valid email address and ensure that the input value is updated accordingly.

3. Subscription Functionality:
   - Test the subscription logic triggered by the button click.
   - Enter a valid email address and click the subscribe button.
   - (Optional) Add assertions related to the subscription logic (e.g., check if a request is made to the server).

4. Edge Cases:
   - Handle edge cases gracefully to prevent unexpected behavior.
   - Test with an empty email input.
   - (Optional) Test with invalid email formats.

5. Accessibility:
   - Ensure that the component is accessible to users with disabilities.
   - Verify the presence of appropriate aria attributes.

6. Styling:
   - Confirm that the component adheres to styling requirements.
   - Check for correct font styles, colors, and layout.

7. Snapshot Testing:
   - Capture and track visual changes in the component over time.
   - Use Jest's snapshot testing to create snapshots of the rendered component.

8. Router Integration:
   - Ensure proper integration with React Router if applicable.
   - Wrap the component with BrowserRouter and test navigation if needed.

9. Code Coverage:
   - Aim for high code coverage to ensure most code paths are tested.
   - Identify and cover critical and complex logic.

10. Internationalization (i18n):
    - Ensure the component supports multiple languages if applicable.
    - Test rendering with different language settings.

11. Component Updates and Maintenance:
    - Establish a baseline for future maintenance efforts.
    - Modify the component code or structure and ensure existing tests still pass.

12. Clean-Up:
    - Clean up any mocks or resources used in the tests.
    - Verify that tests can run independently without interference.


*/


import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Updated import
import { BrowserRouter as Router } from "react-router-dom";
import Subscribe from "../Components/Subscribe";

describe("Subscribe Component", () => {
  it("renders subscribe component", () => {
    render(
      <Router>
        <Subscribe />
      </Router>
    );

    // Check if the main heading is rendered
    expect(screen.getByText("Join the waitlist")).toBeInTheDocument();

    // Check if the subheading is rendered
    expect(
      screen.getByText(
        "Join our waitlist and embark on a transformative communication journey."
      )
    ).toBeInTheDocument();

    // Check if the email input field is rendered
    expect(screen.getByPlaceholderText("Enter your e-mail.")).toBeInTheDocument();

    // Check if the subscribe button is rendered
    expect(screen.getByText("Subscribe")).toBeInTheDocument();
  });

  it("handles email input correctly", () => {
    render(
      <Router>
        <Subscribe />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText("Enter your e-mail.");

    // Type a valid email address
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    // Check if the input value is updated
    expect(emailInput.value).toBe("test@example.com");
  });

  it("subscribes on button click", () => {
    render(
      <Router>
        <Subscribe />
      </Router>
    );

    
    const emailInput = screen.getByPlaceholderText("Enter your e-mail.");
    const subscribeButton = screen.getByText("Subscribe");

    // Type a valid email address
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    // Click the subscribe button
    fireEvent.click(subscribeButton);

    // You may want to add assertions related to the subscription logic if applicable
    // For example, check if a subscription request is made to the server
  });
});
