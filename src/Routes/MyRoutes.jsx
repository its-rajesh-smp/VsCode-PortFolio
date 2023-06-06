import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import WhoIAm from "../Pages/WhoIAm/WhoIAm";
import MyJourney from "../Pages/MyJourney/MyJourney";
import MySkills from "../Pages/MySkills/MySkills";
import Social from "../Pages/Social/Social";
import Form from "../Pages/Form/Form";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WhoIAm />} />
      <Route path="/My_Journey" element={<MyJourney />} />
      <Route path="/My_Skills" element={<MySkills />} />
      <Route path="/_social" element={<Social />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<WhoIAm />} />
    </Routes>
  );
};
export default MyRoutes;
