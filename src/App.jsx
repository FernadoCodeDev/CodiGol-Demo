import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
const clerkFrontendApi = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

import Home from "./page/Home";
import LessonIntro from "./page/LessonIntro"

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LessonIntro" element={<LessonIntro />} />

        </Routes>
      </Router>
    </ClerkProvider>
  );
};

export default App;
