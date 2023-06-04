import React from "react";
import "./FileManager.css";
import FileFolderContainer from "../UI/FileManager/FileFolderContainer/FileFolderContainer";
import Folder from "../UI/FileManager/Folder/Folder";
import File from "../UI/FileManager/File/File";
import STORE from "../../Store/Store";
import TopLogo from "../UI/FileManager/TopLogo/TopLogo";

function FileManager(props) { 
  const marginLeft = 0;
  return (
    <div className=" FileManager-div ">
      <TopLogo />
      <FileFolderContainer border={"none"} marginLeft={marginLeft}>
        {/* For Folders */}
        {Object.keys(STORE.folders).map((folderName) => {
          return (
            <Folder
              marginLeft={marginLeft}
              fileFolders={STORE.folders[folderName]}
              folderName={folderName}
              key={Math.random()}
            />
          );
        })}

        {/* For Files */}
        {Object.keys(STORE.files).map((fileName) => {
          return <File fileName={fileName} key={Math.random()} />;
        })}
      </FileFolderContainer>
    </div>
  );
}

export default FileManager;
