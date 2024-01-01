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
