import React, { useState } from 'react';
import './HamburgerMenu.css'; // Import your CSS styles
import { Link } from "gatsby";

const links = [
    {
      text: "DJ + Live + Dates",
      url: "/dj",
      description:
        "",
    },
    {
      text: "Releases + Discography",
      url: "/releases",
      description:
        "",
    },
    {
      text: "Theater + Film Music",
      url: "/soundtrack",
      description:
        "",
    },
    {
      text: "Mixing + Mastering",
      url: "/mix-master",
      description:
        "",
    },
    {
      text: "About + Contact",
      url: "/vita",
      description:
        "",
    },
  ]




const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className={`hamburger-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
            <div className="menu-icon-bars-wrapper">
              <div className="menu-icon-bar"></div>
              <div className="menu-icon-bar"></div>
              <div className="menu-icon-bar"></div>
            </div>
            </button>
            <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                {links.map((link, index) => (
                <li key={link.text} style={{ '--i': index + 1 }}>
                   <Link to={link.url} activeClassName="active-link">{link.text}</Link>
                </li>
            ))}
                </ul>
            </div>
        </div>          

    );
};

export default HamburgerMenu;
