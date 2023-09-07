// src/App.jsx

import { useState, useEffect } from "react";
import Sizes from "./Components/Sizes/Sizes";
import LandingPage from "./Components/LandingPage/landingPage"; 
import "./App.css";

const githubUrls = {
  gitHub: "https://github.com",
  
};

function App() {
  const [data, setData] = useState(null);
  const [showLandingPage, setShowLandingPage] = useState(true);

  useEffect(() => {
    fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then((response) => response.json())
      .then((data) => setData(data.products));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLandingPage(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      <div className="gitHub">
  <a href={githubUrls.gitHub} target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-github"></i>
  </a>
      </div>

      {showLandingPage ? (
        <LandingPage />
      ) : (
        data && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "5rem",
            }}>
            <Sizes products={data} />
          </div>
        )
      )}
    </>
  );
}

export default App;
