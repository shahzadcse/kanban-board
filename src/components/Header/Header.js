import React from "react";
import logo from "../../logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <div className="App-logo-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-title"> Kanban Board </p>
      </header>
    </div>
  );
};

export default Header;
