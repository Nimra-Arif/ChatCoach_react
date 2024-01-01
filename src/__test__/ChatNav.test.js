/*
Testing Strategy for ChatNav Component:

1. Rendering:
   - Verify that the ChatNav component renders without errors.
   - Check the visibility of the menu items, logo, and settings icon.

2. Tab Selection:
   - Test each tab selection:
     - Emotions, Engagement, Accuracy, Flow (Coaching).
   - Confirm that the selected tab is highlighted correctly.

3. Click Events:
   - Test click events on each menu item and verify if the corresponding action is dispatched.
   - Test click events on the menu icon (SlMenu) and settings icon (RiSettings5Fill).
   - Ensure the proper state changes and actions are triggered.

4. Mobile View:
   - Simulate the mobile view (lg:hidden) and test the visibility of menu items, logo, and icons.
   - Test the functionality of the menu icon in toggling the chat navigation.

5. Styling:
   - Confirm that styling, colors, and transitions are applied correctly.
   - Test responsiveness and alignment of elements.

6. Redux State:
   - Test that the component reads the correct tab and setting state from the Redux store.
   - Dispatch actions to change the state and verify if the component updates accordingly.

7. Component Updates and Maintenance:
   - Ensure that the component works after future updates or changes.
   - Update the component code and check if existing tests still pass.
*/
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Updated import
import { BrowserRouter as Router } from "react-router-dom";
import Subscribe from "../Components/Subscribe";

import ChatNav from "../Components/ChatNav";
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
