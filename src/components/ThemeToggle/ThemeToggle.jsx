import { useContext } from "react";

import {
  ThemeContext,
} from "../../context/ThemeContext";

function ThemeToggle() {
  const {
    darkMode,
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
    >
      {darkMode
        ? "☀️ Light"
        : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;