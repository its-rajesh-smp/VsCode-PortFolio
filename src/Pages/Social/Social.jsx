import React from "react";
import "./Social.css";
import HeaderContainer from "../../Components/UI/HeaderContainer/HeaderContainer";
import SocialScreenBackground from "../../Animations/SocialScreenBackground/SocialScreenBackground";

function Social(props) {
  return (
    <div className=" Social-div pageContainer ">
      <SocialScreenBackground />
      <div className="Social-div__container">
        <HeaderContainer
          src="https://cdn-icons-png.flaticon.com/512/4187/4187336.png"
          text="SOCIAL"
        />
      </div>
    </div>
  );
}

export default Social;
