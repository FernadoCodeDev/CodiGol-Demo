// utils/navigateToNextPhase.js
export const navigateToNextPhase = (currentPhase, navigate) => {
  const routes = {
    LessonIntro: "/Training",
    Training: "/MatchPresentation",
    MatchPresentation: "/SubBench",
    SubBench: "/Game",
    Game: "/FinalScore",
    FinalScore: "/LeagueTable",
    LeagueTable: "/LessonIntro",
  };

  const nextRoute = routes[currentPhase];
  if (nextRoute) navigate(nextRoute);
};
