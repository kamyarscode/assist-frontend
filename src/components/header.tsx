import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header style={headerStyles}>
      <h1>{title}</h1>
    </header>
  );
};

const headerStyles: React.CSSProperties = {
  backgroundColor: "#282c34",
  color: "white",
  padding: "10px 20px",
  textAlign: "center",
};

export default Header;
