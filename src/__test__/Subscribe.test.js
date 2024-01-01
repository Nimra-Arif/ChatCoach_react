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
