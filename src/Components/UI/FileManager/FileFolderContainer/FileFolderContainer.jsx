import React from "react";
import "./FileFolderContainer.css";

function FileFolderContainer(props) {
  return (
    <div
      style={{
        marginLeft: `${props.marginLeft ? props.marginLeft + "px" : "0px"}`,
      }}
      className=" FileFolderContainer-div "
    >
      {...props.children}
    </div>
  );
}

export default FileFolderContainer;
