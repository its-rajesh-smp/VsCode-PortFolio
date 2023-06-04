import React from "react";
import "./App.css";
import FileManager from "../Components/FileManager/FileManager";
import WhoIAm from "../Pages/WhoIAm/WhoIAm";

function App(props) {
  return (
    <div className=" App-div ">
      <FileManager />
      <WhoIAm />
    </div>
  );
}

export default App;
