import { useLocation } from "react-router-dom";
import { useState } from "react";
import bsd from "../assets/images/bsd.svg";
import "../assets/styles/navbar.less";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => currentPath === path;

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
          <a
            href="/bsd"
            className={`link ${isActive("/bsd") ? "active" : ""}`}
          >
            Home
          </a>
          <a
            href="/bsd/projects"
            className={`link ${isActive("/bsd/projects") ? "active" : ""}`}
          >
            Projects
          </a>
          <a
            href="/bsd/contact"
            className={`link ${isActive("/bsd/contact") ? "active" : ""}`}
          >
            Contact
          </a>
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
