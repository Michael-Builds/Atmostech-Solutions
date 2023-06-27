import "./navbar.css";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdPhoneInTalk } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageSelect = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);

    // Perform any translation logic here based on the selected language
    if (selectedLanguage === "en") {
      // Perform translation to English
      translateToEnglish();
    } else if (selectedLanguage === "fr") {
      translateToFrench();
    } else {
      // Handle other languages
      // ...
    }
  };

  const translateToEnglish = () => {
    const translations = {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    };

    // Replace the text content or update the state with the translated values
    document.getElementById("home-link").textContent = translations.home;
    document.getElementById("about-link").textContent = translations.about;
    document.getElementById("services-link").textContent =
      translations.services;
    document.getElementById("contact-link").textContent = translations.contact;
  };

  const translateToFrench = () => {
    const translations = {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      contact: "Contactez-nous",
    };

    // Replace the text content or update the state with the translated values
    document.getElementById("home-link").textContent = translations.home;
    document.getElementById("about-link").textContent = translations.about;
    document.getElementById("services-link").textContent =
      translations.services;
    document.getElementById("contact-link").textContent = translations.contact;
  };

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

  const locationUrl =
    "https://www.google.com.gh/maps/place/VOLTA+ECG+CREDIT+UNION/@6.6112634,0.4602675,17z/data=!3m1!4b1!4m6!3m5!1s0x10272524c3e196fd:0x427847d77aecbb69!8m2!3d6.6112581!4d0.4628424!16s%2Fg%2F11f_j2vxhb?entry=ttu";

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
          <img src="./logo.png" alt="Atmos-tech" className="logo-img" />

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavLink
                id="home-link"
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
                id="about-link"
                to="/about"
                activeClassName="active-link"
                onClick={handleLinkClick}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                id="services-link"
                to="/service"
                activeClassName="active-link"
                onClick={handleLinkClick}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                id="industry-link"
                to="/industry"
                activeClassName="active-link"
                onClick={handleLinkClick}
              >
                Industries
              </NavLink>
            </li>
            <li>
              <NavLink
                id="contact-link"
                to="/contact"
                activeClassName="active-link"
                onClick={handleLinkClick}
              >
                Contact
              </NavLink>
            </li>
            <li className="language-selector">
              <div className="dropdown">
                <select
                  className="language-select"
                  value={selectedLanguage}
                  onChange={handleLanguageSelect}
                >
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  {/* Add more options for other languages */}
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
              <FaRegTimesCircle className="icon " />
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
