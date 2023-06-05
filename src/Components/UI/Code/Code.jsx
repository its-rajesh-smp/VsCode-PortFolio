import React from "react";
import "./Code.css";

function Code(props) {
  return (
    <div className=" Code-div ">
      <p>
        <span>{props.num}</span> {props.text}
      </p>
    </div>
  );
}

export default Code;
