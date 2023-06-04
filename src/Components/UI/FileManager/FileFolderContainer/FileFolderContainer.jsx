import React from "react";
import "./FileFolderContainer.css";

function FileFolderContainer(props) {
  return <div className=" FileFolderContainer-div ">{...props.children}</div>;
}

export default FileFolderContainer;
