import React from "react";
import "./MySkills.css";
import HeaderContainer from "../../Components/UI/HeaderContainer/HeaderContainer";
import SkillContainer from "../../Components/UI/SkillContainer/SkillContainer";
import Skill from "../../Components/UI/Skill/Skill";
import SkillScreenBackground from "../../Animations/SkillScreenBackground/SkillScreenBackground";

function MySkills(props) {
  return (
    <div className=" MySkills-div pageContainer">
      <SkillScreenBackground />
      <div className="MySkills-div__container">
        <HeaderContainer
          src={"https://cdn-icons-png.flaticon.com/512/1367/1367672.png"}
          text={"SKILLS"}
        />

        <SkillContainer type="Core_Skills">
          <Skill
            name="REACT"
            src="https://cdn-icons-png.flaticon.com/512/1048/1048877.png"
          />
          <Skill
            name="JAVASCRIPT"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          />
          <Skill
            name="HTML5"
            src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
          />
          <Skill
            name="CSS3"
            src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
          />
        </SkillContainer>

        <SkillContainer type="Production_Skills">
          <Skill
            name="SCSS / SAAS"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png"
          />
          <Skill
            name="REDUX TOOLKIT"
            src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
          />

          <Skill
            name="REACT ROUTER DOM"
            src="https://seeklogo.com/images/R/reactrouter-logo-4572B114B5-seeklogo.com.png"
          />
          <Skill
            name="FIREBASE"
            src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
          />
          <Skill
            name="GITHUB"
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
          />
        </SkillContainer>

        <SkillContainer type="Helper_Skills">
          <Skill
            name="BOOTSTRAP"
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
          />
          <Skill
            name="REACT BOOTSTRAP"
            src="https://react-bootstrap.netlify.app/img/logo.svg"
          />
          <Skill
            name="MATERIAL UI"
            src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
          />
        </SkillContainer>
      </div>
    </div>
  );
}

export default MySkills;
