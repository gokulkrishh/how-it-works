import React from "react";
import useDarkMode from "use-dark-mode";

function ToggleTheme() {
  const darkMode = useDarkMode(false);

  return (
    <div
      tabIndex="0"
      className="toggle-theme"
      role="button"
      onClick={() => {
        darkMode.toggle();
      }}
      onKeyPress={() => {
        darkMode.toggle();
      }}
    >
      <svg aria-hidden="true" className="svg-icon" width="24" height="24">
        <path d="M18.925 4.075c4.1 4.1 4.1 10.75 0 14.85s-10.75 4.1-14.85 0-4.1-10.75 0-14.85 10.75-4.1 14.85 0zM17.51 17.51a8.5 8.5 0 000-12.02L5.49 17.51a8.5 8.5 0 0012.02 0z"></path>
      </svg>
    </div>
  );
}

export default ToggleTheme;
