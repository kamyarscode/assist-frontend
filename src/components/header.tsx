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
  backgroundColor: "rgba(28, 53, 62, 0.5)",
  color: "white",
  padding: "10px 10px",
  textAlign: "center",
};

export default Header;
