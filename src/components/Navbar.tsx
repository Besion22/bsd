import { NavLink } from "react-router-dom";
import { useState } from "react";
import bsd from "../assets/images/bsd.svg";
import "../assets/styles/navbar.less";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo-container">
          <img
            src={bsd}
            alt="logo"
          />
        </div>

        <div className={`links-container ${isOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          >
            Contact
          </NavLink>
        </div>

        <div
          className="hamburger"
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
