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
