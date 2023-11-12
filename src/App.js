// Import React library to use JSX syntax
import React from "react";

// Import custom components and styles
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import "./app.css";

// Functional component named App
const App = () => {
  return (
    // React fragment to group multiple elements without adding nodes to the DOM
    <>
      {/* Navbar component */}
      <Navbar />

      {/* Header */}
      <h3> MY REACT BOOTSTRAP CHECKPOINT </h3>

      {/* Main content section */}
      <div className="App">
        {/* Card components - rendered three times */}
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

// Export the App component as the default export
export default App;
