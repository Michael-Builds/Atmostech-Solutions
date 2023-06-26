import "./navbar.css";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdPhoneInTalk } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    if (click) {
      setClick(false);
    }
  };

  const handleLinkClick = () => {
    if (click) {
      setClick(false);
    }
  };

  return (
    <header className="header">
      {/* Detials for Reaching */}
      <div className="header-top-bar">
        <div className="container">
          <div className="top-bar-info">
            <ul className="top-bar-item">
              <li>
                <a href="mailto:support@gmail.com">
                  <HiOutlineMail className="icofont-support-faq mr-2" />
                  support@novena.com
                </a>
              </li>
              <li className="list-inline-item">
                <IoLocationOutline className="icofont-location-pin mr-2" />
                Address Ta-134/A, New York, USA
              </li>
              <li>
                <a href="tel:+2330544541587">
                  <MdPhoneInTalk className="icofont-support-faqs mr-2" />
                  +233 0544541587
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Actual Navbar with links */}
      <div className="navbar">
        <div className="container">
          <img src="./logo.png" alt="Atmos-tech" className="logo-img" />

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="active-link"
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active-link"
                onClick={handleLinkClick}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                activeClassName="active-link"
                onClick={handleLinkClick}
              >
                Services
                <IoIosArrowDown className="arrow-down" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active-link"
                onClick={handleLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div
            className={`hamburger ${click ? "active" : ""}`}
            onClick={handleClick}
          >
            {click ? (
              <FaRegTimesCircle className="icon" />
            ) : (
              <AiOutlineMenu className="icon" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
