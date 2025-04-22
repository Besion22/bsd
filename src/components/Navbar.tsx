import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import bsd from "../assets/images/bsd.svg";
import "../assets/styles/navbar.less";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const menu = document.querySelector(".links-container");
      const hamburger = document.querySelector(".hamburger");

      if (
        menu &&
        hamburger &&
        !menu.contains(event.target as Node | null) &&
        !hamburger.contains(event.target as Node | null)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link
          to="/"
          className="logo-container"
        >
          <img
            src={bsd}
            alt="logo"
          />
        </Link>

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
