import { Link } from "react-router-dom";
import "./Header.scss";
import React from "react";
import logo from "../../assets/Logo/InStock-Logo.svg";
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo--modifier" src={logo} alt="logo" />
      </div>
      <div className="header__links">
        <p className="header__links--active">Warehouses</p>
        <p className="header__links--inactive">Inventory</p>
      </div>
    </div>
  );
}

export default Header;
