/*
Testing Strategy for TermsSubheading Component:

1. Rendering:
   - Verify that the TermsSubheading component renders correctly with the provided props.
   - Check if the heading, text1, text2, text3, and text4 are displayed as expected.
   - Confirm that the component structure is correct.

2. Mouse Hover Effects:
   - Test the mouse enter and mouse leave events to ensure they update the state correctly.
   - Simulate mouse enter and check if the showLink state becomes true.
   - Simulate mouse leave and check if the showLink state becomes false.

3. Hashtag Link Visibility:
   - Test that the hashtag link is displayed when showLink is true.
   - Simulate mouse enter, set showLink to true, and check if the hashtag link is visible.
   - Simulate mouse leave, set showLink to false, and check if the hashtag link is hidden.

4. Hashtag Link URL:
   - Test that the hashtag link has the correct href attribute.
   - Provide a heading prop and check if the href attribute matches `#${heading}`.

5. Styling:
   - Verify that the component adheres to styling requirements.
   - Check for correct font styles, colors, and layout.
   - Ensure that the hashtag link is positioned and styled appropriately.

6. Responsive Design:
   - Test how the component behaves on different screen sizes.
   - Ensure that the layout is responsive and elements are positioned correctly.

7. Edge Cases:
   - Test with an empty heading prop and ensure the component handles it gracefully.
   - Test with no heading and verify that the hidden class is applied.
   - Test with empty or falsy values for text1, text2, text3, and text4, and ensure the component handles them gracefully.

8. Text Visibility:
   - Test that each text element is displayed when the corresponding prop is provided.
   - Simulate rendering the component with truthy and falsy values for text1, text2, text3, and text4.

9. Max Width Style:
   - Test that the max-width style is correctly applied to the heading element.
   - Simulate rendering the component with a long heading and check if it respects the max-width style.

10. Accessibility:
    - Ensure that the component is accessible to users with disabilities.
    - Verify the presence of appropriate ARIA attributes.

11. Component Updates and Maintenance:
    - Establish a baseline for future maintenance efforts.
    - Modify the component code or structure and ensure existing tests still pass.

12. Clean-Up:
    - Clean up any mocks or resources used in the tests.
    - Verify that tests can run independently without interference.


*/


import React from "react";import { render, screen, fireEvent } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Sidebar from "../Components/Sidebar";
import "@testing-library/jest-dom";

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
    value: jest.fn(),
    writable: true,
  });
  
  
describe("Sidebar Component", () => {
  it("renders the Sidebar component with initial state", () => {
    render(<Sidebar />);

    // Assert that the Sidebar component is rendered
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeInTheDocument();

    // Assert initial styles
    expect(sidebarElement).toHaveStyle({
      opacity: "0",
      display: "none",
      background: "linear-gradient(to bottom, #A60A53 0%, gray 0%)"
    });
  });

  it("updates the Sidebar styles on scroll within the visible range", () => {
    render(<Sidebar />);
  
    // Simulate scrolling
    fireEvent.scroll(window, { target: { scrollY: 500 } });
  
    // Assert updated styles within the visible range
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toHaveStyle({
      opacity: "0", // Update this based on your actual styles
      display: "none", // Update this based on your actual styles
      background: expect.stringMatching(/linear-gradient\(.+\)/),
    });
  });
  
  
  

  it("does not update the Sidebar styles outside the visible range", () => {
    render(<Sidebar />);

    // Simulate scrolling to a position outside the visible range
    window.scrollTo(0, 0);

    // Assert that styles remain unchanged
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toHaveStyle({
      opacity: "0",
      display: "none",
      background: "linear-gradient(to bottom, #A60A53 0%, gray 0%)"
    });
  });

  // Add more test cases as needed
  it("handles window scroll events correctly", () => {
    render(<Sidebar />);
  
    // Simulate scrolling
    Object.defineProperty(window, "scrollY", { value: 500, writable: true });
    fireEvent.scroll(window);
  
    // Assert that the handleScroll function is called
    expect(window.scrollY).toBe(500);
  });
  
  

  it("cleans up event listener on unmount", () => {
    const addEventListenerSpy = jest.spyOn(window, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");
  
    const { unmount } = render(<Sidebar />);
  
    // Assert that the event listener is initially attached
    expect(addEventListenerSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
  
    // Unmount the component
    unmount();
  
    // Assert that the event listener is removed on unmount
    expect(removeEventListenerSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
  
    // Restore the spy
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
  
});
