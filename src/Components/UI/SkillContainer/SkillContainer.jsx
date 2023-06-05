import React from "react";
import "./SkillContainer.css";

function SkillContainer(props) {
  return (
    <div className=" SkillContainer-div ">
      <h2>{props.type}</h2>
      {props.children}
    </div>
  );
}

export default SkillContainer;
