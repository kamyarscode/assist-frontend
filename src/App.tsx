import React from "react";
import Header from "./components/header";
import "./App.css"; // Global styles

const App: React.FC = () => {
  return (
    <div className="app">
      <Header title="Language Model Assist App" />
      <main>
        <h2>Test header size 2</h2>
        <p>Test paragraph</p>
      </main>
    </div>
  );
};

export default App;
