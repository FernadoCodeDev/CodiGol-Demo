import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
const clerkFrontendApi = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

import Home from "./Start/page/Home";
import Lesson1 from "./Lessons/Lesson1/page/Lesson1"

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Lesson1" element={<Lesson1 />} />

        </Routes>
      </Router>
    </ClerkProvider>
  );
};

export default App;
