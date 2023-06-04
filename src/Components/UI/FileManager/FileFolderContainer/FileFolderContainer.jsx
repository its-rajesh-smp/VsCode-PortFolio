import React from "react";
import "./FileFolderContainer.css";

function FileFolderContainer(props) {
  return (
    <div
      style={{
        border: `${props.border && props.border}`,
        marginLeft: `${props.marginLeft ? props.marginLeft + "px" : "0px"}`,
      }}
      className=" FileFolderContainer-div "
    >
      {...props.children}
    </div>
  );
}

export default FileFolderContainer;
