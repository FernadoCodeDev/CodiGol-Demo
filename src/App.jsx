import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Level/page/Home";
import { ClerkProvider } from "@clerk/clerk-react";

const clerkFrontendApi = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
};

export default App;
