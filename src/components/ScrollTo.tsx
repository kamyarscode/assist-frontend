import React from "react";

interface ScrollToProps {
  elementName: string;
  buttonName: string;    // Accept background image URL
}

const Scroll: React.FC<ScrollToProps> = ({elementName, buttonName}) => {
  const scrollToSection = () => {
    const section = document.getElementById(elementName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button onClick={scrollToSection} style={styles.button}>
      {buttonName}
    </button>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    backgroundColor: "rgb(118, 146, 255)",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "20px",
  },
};

export default Scroll;
