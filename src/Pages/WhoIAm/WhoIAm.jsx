import React from "react";
import "./WhoIAm.css";
import WhoIAmBackground from "../../Particles/WhoIAmBackground";

function WhoIAm(props) {
  return (
    <div className=" WhoIAm-div pageContainer">
      <WhoIAmBackground></WhoIAmBackground>

      <div className="WhoIAm-div__center">
        <div className="WhoIAm-div__center__nameContainer">
          <h1>Hi</h1>
          <h1>I Am Rajesh</h1>
        </div>
        <img src="src\assets\IMG20220726073737.jpg" alt="" />
      </div>
    </div>
  );
}

export default WhoIAm;
