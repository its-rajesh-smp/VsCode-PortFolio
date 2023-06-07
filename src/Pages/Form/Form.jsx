import React from "react";
import "./Form.css";
import HeaderContainer from "../../Components/UI/HeaderContainer/HeaderContainer";
import FormScreenBackground from "../../Animations/FormScreenBackground/FormScreenBackground";

function Form(props) {
  return (
    <div className=" Form-div pageContainer ">
      <FormScreenBackground />
      <div className="Form-div__container">
        <HeaderContainer
          src="https://cdn-icons-png.flaticon.com/512/2245/2245126.png"
          text="FORM"
        />
      </div>
    </div>
  );
}

export default Form;
