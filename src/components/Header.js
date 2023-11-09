import React from "react";
import "../index.css";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <select className="selection">
        <option value="allnote"> All Note</option>
        <option value="complete"> Complete</option>
        <option value="allnote"> Incomplete</option>
      </select>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
