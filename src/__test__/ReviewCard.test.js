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
