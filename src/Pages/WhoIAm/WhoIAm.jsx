import React from "react";
import "./WhoIAm.css";
import HomeScreenBackground from "../../Animations/HomeScreenBackground/HomeScreenBackground";

function WhoIAm(props) {
  return (
    <div className=" WhoIAm-div pageContainer">
      <HomeScreenBackground />
      <div className="WhoIAm-div__center">
        <div className="WhoIAm-div__center__nameContainer">
          <h1 className="first">Hi</h1>
          <h1 className="second">Myself Rajesh</h1>
          <p>I am a Frontend Developer</p>
        </div>
        <img id="myImg" src="src\assets\IMG20220726073737.jpg" alt="" />
      </div>
    </div>
  );
}

export default WhoIAm;
