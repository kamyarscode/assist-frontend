import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";
import TileGrid from "./components/TileGrid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css"; // Global styles

// Sample Page Component for navigation
const Page: React.FC<{ pageTitle: string }> = ({ pageTitle }) => {
  return (
    <div>
      <h2>{pageTitle}</h2>
      <p>Content for {pageTitle} goes here!</p>
    </div>
  );
};


const App: React.FC = () => {
  // Conflicted about hardcoding currently. Will change later.
  const tileTitles = ["Resume", "LM Assist", "Tile Mosaic"];
  // Get these from CDN maybe?
  const tileImages = [
    "https://t3.ftcdn.net/jpg/05/58/61/32/360_F_558613274_Z1zbjnHZKjpnTvvsjfZzYXk2TIeUl54a.jpg",
    "https://t3.ftcdn.net/jpg/05/58/61/32/360_F_558613274_Z1zbjnHZKjpnTvvsjfZzYXk2TIeUl54a.jpg",
    "https://t3.ftcdn.net/jpg/05/58/61/32/360_F_558613274_Z1zbjnHZKjpnTvvsjfZzYXk2TIeUl54a.jpg"
  ];
  
  return (
    <Router>
      <div className="app">
        <Background />
        <Header title="Language Model Assist App" />
        <main>
          <h2>Tile Grid!</h2>
          <TileGrid rows={2} columns={2} images={tileImages} titles={tileTitles} />
        </main>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
