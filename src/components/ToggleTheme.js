import React, { useState, useEffect } from "react";

function ToggleTheme() {
  const preferredTheme = window.localStorage.getItem("theme");
  const themeName = preferredTheme
    ? preferredTheme
    : window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "";

  const [theme, setTheme] = useState(themeName);

  function setMode(theme = "") {
    window.localStorage.setItem("theme", theme);
    setTheme(theme);
    document.body.setAttribute("data-theme", theme);
  }

  useEffect(() => {
    if (themeName === "light") {
      setMode("light");
    } else if (themeName === "dark") {
      setMode("dark");
    }

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const darkModeHandler = e => {
      const darkModeOn = e.matches;
      if (darkModeOn) {
        setMode("dark");
      } else {
        setMode("light");
      }
    };

    darkModeMediaQuery.addEventListener("change", darkModeHandler);

    return () => {
      darkModeMediaQuery.removeEventListener("change", darkModeHandler);
    };
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else if (theme === "dark") {
      setMode("light");
    }
  };

  return (
    <div
      tabIndex="0"
      className="toggle-theme"
      onClick={toggleTheme}
      onKeyPress={event => {
        if (event.key === "Enter") {
          toggleTheme();
        }
      }}
    >
      <svg aria-hidden="true" className="svg-icon" width="24" height="24">
        <path d="M18.925 4.075c4.1 4.1 4.1 10.75 0 14.85s-10.75 4.1-14.85 0-4.1-10.75 0-14.85 10.75-4.1 14.85 0zM17.51 17.51a8.5 8.5 0 000-12.02L5.49 17.51a8.5 8.5 0 0012.02 0z"></path>
      </svg>
    </div>
  );
}

export default ToggleTheme;
