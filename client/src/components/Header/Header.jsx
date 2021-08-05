// import { Link } from react-router-dom;
import "./Header.scss";
import React from "react";
import logo from "./InStock-Logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__links">
        <p className="header__links--active">WareHouses</p>
        <p className="header__links--inactive">Inventory</p>
      </div>
    </div>
  );
}

export default Header;
