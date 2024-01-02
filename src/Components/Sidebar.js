import React, { useState, useEffect } from "react";

/**
 * Sidebar Component
 *
 * Displays a vertical sidebar with dynamic opacity and background gradient based on scroll percentage.
 *
 * @component
 * @returns {JSX.Element} - The rendered Sidebar component.
 */


const Sidebar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolledHeight = window.scrollY;
    const newScrollPercentage = (scrolledHeight / totalHeight) * 100;
    setScrollPercentage(newScrollPercentage);

    // Calculate the scroll value based on scrollPercentage
    const newScrollValue = Math.max(
      0,
      Math.min(100, ((newScrollPercentage - 14.2) / 21.85) * 100)
    );
    setScroll(newScrollValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isVisible = scrollPercentage >= 14.2 && scrollPercentage <= 36.05;

  const dynamicStyles = {
    opacity: isVisible ? 0.7 : 0,
    display: isVisible ? "block" : "none",
    background: `linear-gradient(to bottom, #A60A53 ${scroll}%, gray ${scroll}%)`
  };

  return (
    <div
    className="top-[25%] left-[5%] w-[3px] md:block hidden z-10 h-[50vh]"
    style={dynamicStyles}
    data-testid="sidebar" // Add this line
   
    ></div>
  );
};

export default Sidebar;
