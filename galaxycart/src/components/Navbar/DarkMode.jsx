import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // useEffect to persist theme and update the HTML element class
  React.useEffect(() => {
    localStorage.setItem("theme", theme); // Save the theme in localStorage
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]); // Dependency array to trigger on theme change

  return (
    <div>
      <img
        src={theme === "light" ? LightButton : DarkButton}
        alt="Toggle Theme"
        className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-80" : "opacity-100"}`}
        onClick={toggleTheme}
      />
    </div>
  );
};

export default DarkMode;
