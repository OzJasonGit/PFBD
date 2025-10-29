"use client";

import { useTheme } from "../Context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <FontAwesomeIcon
          icon={faMoon}
          className="w-5 h-5 text-gray-700 dark:text-gray-300"
        />
      ) : (
        <FontAwesomeIcon
          icon={faSun}
          className="w-5 h-5 text-gray-700 dark:text-gray-300"
        />
      )}
    </button>
  );
}

