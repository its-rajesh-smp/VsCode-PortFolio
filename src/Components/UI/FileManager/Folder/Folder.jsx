import React, { useState } from "react";
import "./Folder.css";
import FileFolderContainer from "../FileFolderContainer/FileFolderContainer";
import File from "../File/File";

function Folder(props) {
  const [openFolder, setOpenFolder] = useState(false);

  // On Click Open Folder
  const onClickOpenFolderHandeler = () => {
    setOpenFolder((p) => !p);
  };

  // For Folders
  const Folders = props.fileFolders.folders
    ? Object.keys(props.fileFolders.folders).map((folderName) => {
        return (
          <Folder
            fileFolders={props.fileFolders.folders[folderName]}
            folderName={folderName}
            key={Math.random()}
          />
        );
      })
    : [];

  // For Files
  const Files = props.fileFolders.files
    ? Object.keys(props.fileFolders.files).map((fileName) => {
        return <File fileName={fileName} key={Math.random()} />;
      })
    : [];

  return (
    <>
      <div onClick={onClickOpenFolderHandeler} className=" Folder-div ">
        <i className="ri-folder-line"></i>
        <p>{props.folderName}</p>
      </div>
      {openFolder && (
        <FileFolderContainer marginLeft={props.marginLeft + 20}>
          {Folders}
          {Files}
        </FileFolderContainer>
      )}
    </>
  );
}

export default Folder;
