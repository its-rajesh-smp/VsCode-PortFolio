import React from "react";
import "./JourneyDiv.css";

function JourneyDiv(props) {
  return (
    <div className=" JourneyDiv-div ">
      <div className="h1Container">
        <h1>📆</h1>
        <h2>{props.h2}</h2>
      </div>
      <div className="restContainer">
        {props.h3 && <h3>{props.h3}</h3>}
        {props.children}
      </div>
    </div>
  );
}

export default JourneyDiv;
