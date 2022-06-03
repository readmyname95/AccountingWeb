import React from "react";
import logo from "../../assets/accountingLogo.png";
import "./navbarStyle.css";

function navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo} />
      </div>
      <div className="rightSide">
        <button className="button">Home</button>
        <button className="button">Report</button>
        <button className="button">Export</button>
        <button className="button">About</button>
      </div>
    </div>
  );
}

export default navbar;
