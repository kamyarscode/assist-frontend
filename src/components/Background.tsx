import React from "react";

const Background: React.FC = () => {
  const backgroundStyles: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // Ensure it stays in the background
    background: "linear-gradient(to bottom, #89c9b8,rgb(162, 183, 203))",
  };

  return <div style={backgroundStyles}></div>;
};

export default Background;
