import React from "react";
import "./WhoIAm.css";

function WhoIAm(props) {
  return (
    <div className=" WhoIAm-div pageContainer">
      <div className="WhoIAm-div__center">
        <div className="WhoIAm-div__center__nameContainer">
          <h1 className="first">Hi</h1>
          <h1 className="second">Myself Rajesh</h1>
        </div>
        <img src="src\assets\IMG20220726073737.jpg" alt="" />
      </div>
    </div>
  );
}

export default WhoIAm;
