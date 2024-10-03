import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    
  };

  return (
  <div>
    <img 
        src={theme === "light" ? LightButton : DarkButton} 
        alt="Toggle Theme"
        className="w-12 cursor-pointer" 
        onClick={toggleTheme} 
       />
  </div>
  );
};

export default DarkMode;