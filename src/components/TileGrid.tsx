import React from "react";
import Tile from "./Tile";

interface TileGridProps {
  rows: number;
  columns: number;
  images: string[]; // Array of image URLs for tiles
  titles: string[]; // Array of titles for tiles
}

const TileGrid: React.FC<TileGridProps> = ({ rows, columns, images, titles }) => {
  const gridStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`, // Define columns
    gridTemplateRows: `repeat(${rows}, 1fr)`,      // Define rows
    gap: "16px",                                   // Space between tiles
    justifyItems: "center",
    alignItems: "center",
    padding: "20px",
  };

  const totalTiles = rows * columns;

  // Ensure the array has enough images to fill the grid
  const tileData = Array.from({ length: totalTiles }, (_, index) => ({
    title: titles[index] || `Tile ${index + 1}`, // Use custom title or fallback
    imageUrl: images[index] || "https://via.placeholder.com/120x120?text=Placeholder", // Fallback image
  }));

  const handleTileClick = (tileTitle: string) => {
    console.log(`${tileTitle} clicked!`);
  };

  return (
    <div style={gridStyles}>
      {tileData.map((tile, index) => (
        <Tile
          key={index}
          title={tile.title}
          imageUrl={tile.imageUrl}
          onClick={() => handleTileClick(tile.title)}
        />
      ))}
    </div>
  );
};

export default TileGrid;
