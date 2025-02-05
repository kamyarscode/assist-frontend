import React, { useState, useEffect } from "react";
import SocialTiles from "./SocialTiles";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
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

const socialLinkTiles = [
    { title: "GitHub", link: "github.com" },
    { title: "LinkedIn", link: "linkedin.com" },
    { title: "Contact Us", link: "mailto:contact@example.com" },
    { title: "Privacy Policy", link: "/privacy" },
    ];

const footerStyles: React.CSSProperties = {
  backgroundColor: "rgb(118, 146, 255)",    // Dark background
  color: "rgb(0, 0, 0)",              // White text color
  padding: "5px 5px",       // Padding around the footer
  textAlign: "center",        // Center the text
  position: "fixed",          // Fix the footer at the bottom of the page
  left: "0",
  bottom: "0",                // Align it at the bottom of the page
  width: "100%",              // Take up the full width of the page
  boxShadow: "0 2px 4px rgba(214, 214, 214, 0.2)", // Shadow effect for the button

};

//   const handleTileClick = (tileTitle: string) => {
//     console.log(`${tileTitle} clicked!`);
//   };
return (
  <motion.footer
    className="footer"
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div style={footerStyles}>
    <p>&copy; 2025 Portfolio. All rights reserved.</p>
      <SocialTiles socialLinkTiles={socialLinkTiles} />
      {/* <p>
        <a href="/privacy" style={{ color: "#fff", textDecoration: "none" }}>Privacy Policy</a> |{" "}
        <a href="/terms" style={{ color: "#fff", textDecoration: "none" }}>Terms of Service</a>
      </p> */}
  </div>
</motion.footer>
);
};




export default Footer;
