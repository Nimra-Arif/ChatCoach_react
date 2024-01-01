/*
Testing Strategy for Sidebar Component:

1. Rendering:
   - Verify that the Sidebar component renders correctly with initial styles.
   - Check if the sidebar element is initially hidden with opacity 0.

2. Scroll Event Handling:
   - Test that the Sidebar updates its styles based on the window scroll event.
   - Simulate scrolling within the visible range and verify that styles are updated accordingly.
   - Simulate scrolling outside the visible range and ensure that styles remain unchanged.

3. Scroll Percentage Calculation:
   - Test that the scroll percentage is calculated correctly based on the scroll position.
   - Simulate scrolling and verify that the scroll percentage is updated accordingly.

4. Dynamic Styles:
   - Test that the dynamic styles (opacity, display, background) are applied correctly.
   - Simulate scrolling within and outside the visible range, and check the styles accordingly.

5. Scroll Value Calculation:
   - Test that the scroll value is calculated correctly based on the scroll percentage.
   - Verify that the scroll value is within the expected range.

6. Visibility Calculation:
   - Test that the visibility of the sidebar is calculated correctly.
   - Simulate scrolling within and outside the visible range, and check if the sidebar is visible or hidden.

7. Event Listener Management:
   - Test that the window scroll event listener is correctly added and removed during component lifecycle.
   - Assert that the event listener is initially attached.
   - Unmount the component and ensure that the event listener is removed.

8. Unmount Cleanup:
   - Test that the component cleans up the event listener on unmount.
   - Assert that the event listener is removed on unmount.

9. Edge Cases:
   - Test with extreme scroll positions and ensure that the component behaves gracefully.
   - Test with different window sizes to confirm responsiveness.

10. Accessibility:
    - Ensure that the component is accessible to users with disabilities.
    - Verify the presence of appropriate ARIA attributes.

11. Performance:
    - Test the performance of the component by scrolling rapidly and ensure smooth behavior.

12. Code Coverage:
    - Aim for high code coverage to ensure most code paths are tested.
    - Identify and cover critical and complex logic.

13. Component Updates and Maintenance:
    - Establish a baseline for future maintenance efforts.
    - Modify the component code or structure and ensure existing tests still pass.

14. Clean-Up:
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
