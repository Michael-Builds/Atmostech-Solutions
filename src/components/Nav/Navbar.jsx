import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdPhoneInTalk } from "react-icons/md";
import { IoIosGlobe, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import "./navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  // Toggle the dropdown visibility on click
  const handleDropdownClick = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleLanguageSelect = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
  };

  const handleClick = () => {
    setClick(!click);
  };

  const handleLinkClick = () => {
    setClick(false);
    setIsDropdownOpen(false);
  };

  const handleMouseEnterServices = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    setIsDropdownOpen(false);
  };

  const locationUrl =
    "https://www.google.com.gh/maps/place/VOLTA+ECG+CREDIT+UNION/@6.6112634,0.4602675,17z/data=!3m1!4b1!4m6!3m5!1s0x10272524c3e196fd:0x427847d77aecbb69!8m2!3d6.6112581!4d0.4628424!16s%2Fg%2F11f_j2vxhb?entry=ttu";

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "fr", label: "French" },
  ];

  const translations = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      contact: "Contactez-nous",
    },
  };

  const arrowIcon = isDropdownOpen ? (
    <IoIosArrowUp className="arrow-icon" />
  ) : (
    <IoIosArrowDown className="arrow-icon" />
  );

  return (
    <header className="header">
      {/* Details for Reaching */}
      <div className="header-top-bar">
        <div className="container">
          <div className="top-bar-info">
            <ul className="top-bar-item">
              <li>
                <a href="mailto:info@atmostechsolution.com">
                  <HiOutlineMail className="icofont-support-faq mr-2" />
                  info@atmostechsolution.com
                </a>
              </li>
              <li>
                <a href={locationUrl} target="_blank" rel="noopener noreferrer">
                  <IoLocationOutline className="icofont-location-pin mr-2" />
                  VH-0004-1348, ECG Volta CU, Agric Ave, Ho Mun., Volta, Ghana.
                </a>
              </li>
              <li>
                <a href="tel:+2330544541587">
                  <MdPhoneInTalk className="icofont-support-faqs mr-2" />
                  +233 (0) 24055 6434
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Actual Navbar with links */}
      <div className="navbar">
        <div className="container">
          <img src={logo} alt="Atmos-tech" className="logo-img" />

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="active-link"
                onClick={handleLinkClick}
              >
                {translations[selectedLanguage].home}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active-link"
                onClick={handleLinkClick}
              >
                {translations[selectedLanguage].about}
              </NavLink>
            </li>
            <li
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
              className={`dropdown-container ${dropdownActive ? "active" : ""}`}
            >
              <div className="dropdown-link" onClick={handleDropdownClick}>
                <NavLink
                  to="/service"
                  activeClassName="active-link"
                  onClick={handleLinkClick}
                >
                  {translations[selectedLanguage].services} {arrowIcon}
                </NavLink>
              </div>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/departments"
                      activeClassName="active-link"
                      onClick={handleLinkClick}
                    >
                      Web Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/department-single"
                      activeClassName="active-link"
                      onClick={handleLinkClick}
                    >
                      Mobile Development
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/industry"
                activeClassName="active-link"
                onClick={handleLinkClick}
              >
                Industries
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active-link"
                onClick={handleLinkClick}
              >
                {translations[selectedLanguage].contact}
              </NavLink>
            </li>
            <li className="language-selector">
              <div className="dropdown">
                <select
                  className="language-select"
                  value={selectedLanguage}
                  onChange={handleLanguageSelect}
                >
                  {languageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <IoIosGlobe className="language-icon" />
              </div>
            </li>
          </ul>
          <div
            className={`hamburger ${click ? "active" : ""}`}
            onClick={handleClick}
          >
            {click ? (
              <VscChromeClose className="icon " />
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
