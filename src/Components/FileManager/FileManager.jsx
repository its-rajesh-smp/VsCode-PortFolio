import React from "react";
import "./FileManager.css";
import FileFolderContainer from "../UI/FileManager/FileFolderContainer/FileFolderContainer";
import Folder from "../UI/FileManager/Folder/Folder";
import File from "../UI/FileManager/File/File";
import STORE from "../../Store/Store";

function FileManager(props) {
  return (
    <div className=" FileManager-div ">
      <FileFolderContainer>
        {/* For Folders */}
        {Object.keys(STORE.folders).map((folderName) => {
          return (
            <Folder
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
