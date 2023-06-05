import React from "react";
import "./App.css";
import FileManager from "../Components/FileManager/FileManager";
import WhoIAm from "../Pages/WhoIAm/WhoIAm";
import MyJourney from "../Pages/MyJourney/MyJourney";
import MySkills from "../Pages/MySkills/MySkills";

function App(props) {
  return (
    <div className=" App-div ">
      <FileManager />
      {/* <WhoIAm /> */}
      {/* <MyJourney /> */}
      <MySkills />
    </div>
  );
}

export default App;
