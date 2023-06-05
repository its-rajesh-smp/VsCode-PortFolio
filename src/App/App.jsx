import React from "react";
import "./App.css";
import FileManager from "../Components/FileManager/FileManager";
import WhoIAm from "../Pages/WhoIAm/WhoIAm";
import MyJourney from "../Pages/MyJourney/MyJourney";

function App(props) {
  return (
    <div className=" App-div ">
      <FileManager />
      {/* <WhoIAm /> */}
      <MyJourney />
    </div>
  );
}

export default App;
