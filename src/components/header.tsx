import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";

interface HeaderProps {
  title: string;
}
const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "GitHub", href: "https://github.com/", external: true },
];

const Header: React.FC<HeaderProps> = ({ title }) => {

const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
    setIsVisible(scrolledToBottom);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const headerStyles: React.CSSProperties = {
  backgroundColor: "rgb(118, 146, 255)",
  color: "white",
  padding: "10px 10px",
  textAlign: "center",
  boxShadow: "0 2px 4px rgba(214, 214, 214, 0.2)", // Shadow effect for the button

};
return (
  <header style={headerStyles}>
    <h1>{title}</h1>
    <motion.header
    className="header"
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
  </motion.header>
  <HamburgerMenu links={menuItems} />

  </header>
);
};

export default Header;
