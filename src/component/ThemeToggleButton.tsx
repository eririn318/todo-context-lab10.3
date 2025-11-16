import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggleButton() {
  const context = useContext(ThemeContext);

  if (!context) return null;

  // get value={theme, toggleTheme} from  <ThemeContext.Provider value={{theme, toggleTheme}}>
  // const theme = context.theme
  // const toggleTheme = context.toggleTheme
  // theme=('light' | 'dark')
  const { theme, toggleTheme } = context;

  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "#FFB823" : "#5B532C",
          color: theme === "light" ? "black" : "white",
        }}
      >
        {theme === "light" ? "🌙" : "☀️"} Swtitch to{" "}
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </>
  );
}

export default ThemeToggleButton;
