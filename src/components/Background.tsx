import React from "react";

const Background: React.FC = () => {
  const backgroundStyles: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // Ensure it stays in the background
    background: "linear-gradient(to bottom,rgb(70, 70, 85),rgb(70, 70, 85))",
  };

  return <div style={backgroundStyles}></div>;
};

export default Background;
