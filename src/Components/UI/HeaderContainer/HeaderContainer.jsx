import React from "react";
import "./HeaderContainer.css";

function HeaderContainer(props) {
  return (
    <div className=" HeaderContainer-div ">
      <img src={props.src} alt={props.text} />
      <h1>{props.text}</h1>
    </div>
  );
}

export default HeaderContainer;
