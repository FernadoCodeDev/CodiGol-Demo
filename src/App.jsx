import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Level/page/Home"; // Home LandingMine Page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for each page */}
        <Route path="/" element={<Home />} />
      
      </Routes>
    </Router>
  );
};

export default App;
