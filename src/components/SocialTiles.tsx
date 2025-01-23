import React from "react";
import SocialTile from "./Social";

interface SocialTileProps {
  socialLinkTiles: { title: string; link: string }[]; // Array of tile data
}

const SocialTiles: React.FC<SocialTileProps> = ({ socialLinkTiles }) => {
  const containerStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",  // Center the tiles horizontally
    flexWrap: "wrap",          // Allow wrapping if tiles exceed the width
    padding: "5px",
  };

  return (
    <div style={containerStyles}>
      {socialLinkTiles.map((tile, index) => (
        <SocialTile key={index} title={tile.title} link={tile.link} />
      ))}
    </div>
  );
};

export default SocialTiles;
