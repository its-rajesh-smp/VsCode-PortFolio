import React from "react";
import "./File.css";

function File(props) {
  return (
    <div className=" File-div ">
      <i className="ri-file-line"></i>
      <p>{props.fileName}</p>
    </div>
  );
}

export default File;
