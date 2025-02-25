// import React from "react";

// interface BigTileAnimate {
//     title: string;
//     onClick: () => void; // Handle the click event
//   }

// const BigTileAnimate: React.FC<BigTileAnimate> = ({ title, onClick }) => {
//   const bigTileStyle: React.CSSProperties = {
//     backgroundColor: "rgba(22, 85, 109, 0.5)",
//     backgroundSize: "cover",             // Make sure the image covers the tile
//     backgroundPosition: "center",        // Center the background image
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(39, 38, 38, 0.2)", // Shadow effect for the button
//     padding: "20px",
//     textAlign: "center",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: "16px",
//     height: "120px",
//     width: "120px",
//     cursor: "pointer",  // Change cursor to pointer on hover
//     color: "#fff",      // White text color (for readability)
//     position: "relative",
//     transition: "transform 0.2s ease", // Smooth transform on hover
//   };

//   return (
//     <div style={bigTileStyle} onClick={handleClick}>
//       <div>{title}</div>
//     </div>
//   );
// };

// export default BigTileAnimate;
