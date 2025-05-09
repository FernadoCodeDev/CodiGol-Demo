import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
const clerkFrontendApi = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

import Home from "./page/Home";
import LessonIntro from "./page/LessonIntro";
import Training from "./page/Training";
import MatchPresentation from "./page/MatchPresentation";
import SubBench from "./page/SubBench";
import Game from "./page/Game";
import FinalScore from "./page/FinalScore";
import LeagueTable from "./page/LeagueTable";
import Prove from "./page/Prove";

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LessonIntro" element={<LessonIntro />} />
          <Route path="/Training" element={<Training />} />
          <Route path="/MatchPresentation" element={<MatchPresentation />} />
          <Route path="/SubBench" element={<SubBench />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/FinalScore" element={<FinalScore />} />
          <Route path="/LeagueTable" element={<LeagueTable />} />
          <Route path="/Prove" element={<Prove />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
};

export default App;
