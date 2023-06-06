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
        <div className="codeContainer">
          <div className="codeLine">
            <p className="codeNumber">1</p>
            <p className="code">
              <span className="variable">const</span>
              <span className="object">socialLinksObj</span>
              <span className="equal">=</span>
              <span className="curlyBracket">{"{"}</span>
            </p>
          </div>

          <div className="codeLine">
            <p className="codeNumber">2</p>
            <p className="code indented">
              <span className="Objkey">mobileNumber</span>
              <span className="isto">:</span>
              <sp className="squarBracket" an>
                {"["}
              </sp>
              <span className="arrValue">{`"+91 8942908195"`}</span>
              <span>{","}</span>
              <span className="arrValue">{`"+91 9734279378"`}</span>
              <span className="squarBracket">{"]"}</span>
              <span className="">{","}</span>
            </p>
          </div>

          <div className="codeLine">
            <p className="codeNumber">3</p>
            <p className="code indented">
              <span className="Objkey">email</span>
              <span className="isto">:</span>
              <sp className="squarBracket" an>
                {"["}
              </sp>
              <span className="arrValue">{`"rajesh@gmail.com"`}</span>
              <span>{","}</span>
              <span className="arrValue">{`"work.rajesh@gmail.com"`}</span>
              <span className="squarBracket">{"]"}</span>
              <span className="">{","}</span>
            </p>
          </div>

          <div className="codeLine">
            <p className="codeNumber">4</p>
            <p className="code indented">
              <span className="Objkey">linkdin</span>
              <span className="isto">:</span>
              <span className="ObjValue">{`"its_rajesh_smp"`}</span>
              <span className="">{","}</span>
            </p>
          </div>

          <div className="codeLine">
            <p className="codeNumber">4</p>
            <p className="code indented">
              <span className="Objkey">gitHub</span>
              <span className="isto">:</span>
              <span className="ObjValue">{`"its_rajesh_smp"`}</span>
              <span className="">{","}</span>
            </p>
          </div>

          <div className="codeLine">
            <p className="codeNumber">5</p>
            <p className="code indented">
              <span className="Objkey">youtube</span>
              <span className="isto">:</span>
              <span className="ObjValue">{`"its_Rajesh_Smp"`}</span>
            </p>
          </div>

          <div className="codeLine">
            <p className="codeNumber">6</p>
            <p className="code">
              <span className="curlyBracket">{"}"}</span>
              <span>{";"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
