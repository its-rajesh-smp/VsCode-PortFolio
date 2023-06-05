import React from "react";
import "./Skill.css";

function Skill(props) {
  return (
    <div className=" Skill-div ">
      <img src={props.src} alt="" />
      <h3>{props.name}</h3>
    </div>
  );
}

export default Skill;
