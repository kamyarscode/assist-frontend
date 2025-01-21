import React from "react";
import SocialTiles from "./SocialTiles";

const Footer: React.FC = () => {

const socialLinkTiles = [
    { title: "GitHub", link: "github.com" },
    { title: "LinkedIn", link: "linkedin.com" },
    { title: "Contact Us", link: "mailto:contact@example.com" },
    { title: "Privacy Policy", link: "/privacy" },
    ];

  const footerStyles: React.CSSProperties = {
    backgroundColor: "#333",    // Dark background
    color: "#fff",              // White text color
    padding: "5px 5px",       // Padding around the footer
    textAlign: "center",        // Center the text
    position: "fixed",          // Fix the footer at the bottom of the page
    left: "0",
    bottom: "0",                // Align it at the bottom of the page
    width: "100%",              // Take up the full width of the page
  };

//   const handleTileClick = (tileTitle: string) => {
//     console.log(`${tileTitle} clicked!`);
//   };

  return (
    <div style={footerStyles}>
    <p>&copy; 2025 Portfolio. All rights reserved.</p>
      <SocialTiles socialLinkTiles={socialLinkTiles} />
      {/* <p>
        <a href="/privacy" style={{ color: "#fff", textDecoration: "none" }}>Privacy Policy</a> |{" "}
        <a href="/terms" style={{ color: "#fff", textDecoration: "none" }}>Terms of Service</a>
      </p> */}
    </div>
  );
};

export default Footer;
