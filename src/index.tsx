import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Global styles

// Grab the root element from the HTML
const rootElement = document.getElementById("root") as HTMLElement;

// Create a root for rendering React
const root = ReactDOM.createRoot(rootElement);

// Render the App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
