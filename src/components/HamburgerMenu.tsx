import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Use only if routing is needed
import "../styles/HamburgerMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
  label: string;
  href: string;
  external?: boolean; // If true, opens in a new tab
}

interface HamburgerMenuProps {
  links: MenuItem[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      {/* Hamburger icon section */}
      <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Slide-in Menu for now */}
      <motion.div
        className="menu"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="menu-content">
          <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href}>{link.label}</Link> // For internal links
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;
