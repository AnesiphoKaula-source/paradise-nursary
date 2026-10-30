
import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "#plants";
  };

  return (
    <div className="App">
      <div className="landing-page">
        <h1>Welcome to Paradise Nursery</h1>

        <p>
          Discover the beauty of nature with our collection
          of beautiful indoor houseplants. Bring life, freshness,
          and greenery into your home.
        </p>

        <button
          className="get-started-button"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
