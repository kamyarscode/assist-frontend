import React from "react";

interface TileProps {
  title: string;
  imageUrl: string;    // Accept background image URL
  onClick: () => void; // Handle the click event
}

const Tile: React.FC<TileProps> = ({ title, imageUrl, onClick }) => {
  const tileStyles: React.CSSProperties = {
    backgroundColor: "rgba(22, 85, 109, 0.5)",
    backgroundImage: `url(${imageUrl})`, // Set the background image
    backgroundSize: "cover",             // Make sure the image covers the tile
    backgroundPosition: "center",        // Center the background image
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(39, 38, 38, 0.2)", // Shadow effect for the button
    padding: "20px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    height: "120px",
    width: "120px",
    cursor: "pointer",  // Change cursor to pointer on hover
    color: "#fff",      // White text color (for readability)
    position: "relative",
    transition: "transform 0.2s ease", // Smooth transform on hover
  };

  // Handle button click
  const handleClick = () => {
    onClick();
  };

  return (
    <div style={tileStyles} onClick={handleClick}>
      <div>{title}</div>
    </div>
  );
};

export default Tile;
