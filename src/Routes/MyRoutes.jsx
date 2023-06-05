import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import WhoIAm from "../Pages/WhoIAm/WhoIAm";
import MyJourney from "../Pages/MyJourney/MyJourney";
import MySkills from "../Pages/MySkills/MySkills";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WhoIAm />} />
    </Routes>
  );
};
export default MyRoutes;
