import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faReact, faAngular, faJs, faGitAlt, faNodeJs, faSass } from "@fortawesome/free-brands-svg-icons";
import "../styles/TechStyles.css";

const frontendTechs = [
  { name: "React", icon: faReact, color: "#61DBFB" },
  { name: "Angular", icon: faAngular, color: "#DD0031" },
  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
  { name: "Git", icon: faGitAlt, color: "#F1502F" },
  { name: "Node.js", icon: faNodeJs, color: "#68A063" },
  { name: "Sass", icon: faSass, color: "#CD6799" },
  { name: "Next.js", icon: faNodeJs, color: "#000000" },
];


const TechStack: React.FC = () => {
    return (
        <div id="tech-section" className="tech-section">
        <div className="tech-grid">
          {frontendTechs.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-item"
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            >
              <FontAwesomeIcon icon={tech.icon} className="tech-icon" size="2xl" style={{ color: tech.color }} />
              <p>{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

export default TechStack;
