import React from "react";
import "./File.css";
import { useNavigate } from "react-router-dom";

function File(props) {
  const navgate = useNavigate();
  const onClickFile = () => {
    navgate(`/${props.fileName.split(".")[0]}`);
  };

  return (
    <div onClick={onClickFile} className=" File-div ">
      <i className="ri-file-line"></i>
      <p>{props.fileName}</p>
    </div>
  );
}

export default File;
