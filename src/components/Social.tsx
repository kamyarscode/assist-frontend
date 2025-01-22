import React from "react";

interface SocialProps {
  title: string;
  link: string; // Accept link either URL or email.
//   onClick: () => void; // Handle the click event
}

const SocialTile: React.FC<SocialProps> = ({ title, link }) => {
  const tileStyles: React.CSSProperties = {
    backgroundColor: "rgba(190, 210, 217, 0.5)",
    borderRadius: "8px",
    // boxShadow: "0 4px 8px rgba(39, 38, 38, 0.2)", // Shadow effect for the button
    padding: "20px",
    margin: "10px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    height: "10px",
    width: "40px",
    cursor: "pointer",  // Change cursor to pointer on hover
    color: "#fff",      // White text color (for readability)
    position: "relative",
    transition: "transform 0.2s ease", // Smooth transform on hover
  };

  const handleHover: React.CSSProperties = {
    transform: "scale(1.05)", // Scale the tile slightly when hovered
  };

  return (
    <a
      href={link.startsWith("mailto:") ? link : `https://${link}`} // Handle email links and URLs
      style={tileStyles}
      onMouseOver={(e) => Object.assign(e.currentTarget.style, handleHover)}
      onMouseOut={(e) => Object.assign(e.currentTarget.style, { transform: "scale(1)" })} >
      {title}
    </a>
  );
};

export default SocialTile;
