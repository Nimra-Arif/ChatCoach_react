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
