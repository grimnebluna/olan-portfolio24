import React, { useState } from 'react';
import './HamburgerMenu.css'; // Import your CSS styles


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
      url: "https://www.gatsbyjs.com/cloud",
      description:
        "",
    },
    {
      text: "Vita",
      url: "/vita",
      description:
        "",
    },
    {
      text: "Contact",
      url: "/contact",
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
                    <a href={link.url}>{link.text}</a>
                </li>
            ))}
                </ul>
            </div>
        </div>          

    );
};

export default HamburgerMenu;
