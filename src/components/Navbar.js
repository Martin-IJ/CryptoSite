import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <h1>
            iCe<span className="primary">Coin</span>
          </h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavLink to="/" activeClassName="active" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/featured"
              activeClassName="active"
              onClick={closeMenu}
            >
              Featured
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crypto-calculator"
              activeClassName="active"
              onClick={closeMenu}
            >
              Calculate
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div
          className="hamburger"
          onClick={handleClick}
          aria-label="Toggle navigation menu"
        >
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
