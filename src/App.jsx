
import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "/plants";
  };

  return (
    <div className="App">
      <div className="landing-page">

        <h1>Welcome to Paradise Nursery</h1>

        <h2>Bring Nature Into Your Home</h2>

        <p>
          Welcome to Paradise Nursery, your destination for beautiful
          indoor houseplants. Discover our collection of carefully
          selected plants and bring freshness, beauty, and nature
          into your living space.
        </p>

        <p>
          Whether you are a beginner or an experienced plant lover,
          we have the perfect plant for you.
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
