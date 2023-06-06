import React from "react";
import "./Form.css";
import HeaderContainer from "../../Components/UI/HeaderContainer/HeaderContainer";

function Form(props) {
  return (
    <div className=" Form-div pageContainer ">
      <HeaderContainer
        src="https://cdn-icons-png.flaticon.com/512/2245/2245126.png"
        text="FORM"
      />

      <div className="codeContainer">
        <div className="codeLine">
          <p className="codeNumber">1</p>
          <p className="code">
            <span className="variable">import</span>
            <span className="object">axios</span>
            <span className="equal">from</span>
            <span className="ObjValue">{`"axios"`}</span>
            <span>{";"}</span>
          </p>
        </div>

        <div className="codeLine">
          <p className="codeNumber">2</p>
          <p className="code">
            <span className="variable">import</span>
            <span className="curlyBracket">{"{"}</span>
            <span className="object">{"FORM_SUBMIT_URL"}</span>
            <span className="curlyBracket">{"}"}</span>
            <span className="equal">from</span>
            <span className="ObjValue">{`"./FIREBASE_API_URL.js"`}</span>
            <span>{";"}</span>
          </p>
        </div>

        <div className="codeLine">
          <p className="codeNumber">3</p>
        </div>

        <div className="codeLine">
          <p className="codeNumber">4</p>
        </div>

        <div className="codeLine">
          <p className="codeNumber">5</p>
          <p className="code">
            <span className="variable">const</span>
            <span className="object">enteredInputObj</span>
            <span className="equal">=</span>
            <span className="curlyBracket">{"{"}</span>
          </p>
        </div>

        <div className="codeLine">
          <p className="codeNumber">6</p>
          <div className="code indented">
            <span className="Objkey">name</span>
            <span className="isto">:</span>
            <p className="ObjValue">
              <span>"</span>
              <span contentEditable>{`enter your name here`}</span>
              <span>"</span>
            </p>
            <span>{","}</span>
          </div>
        </div>

        <div className="codeLine">
          <p className="codeNumber">7</p>
          <div className="code indented">
            <span className="Objkey">email</span>
            <span className="isto">:</span>
            <p className="ObjValue">
              <span>"</span>
              <span contentEditable>{`enter your email here`}</span>
              <span>"</span>
            </p>
            <span>{","}</span>
          </div>
        </div>

        <div className="codeLine">
          <p className="codeNumber">8</p>
          <div className="code indented">
            <span className="Objkey">subject</span>
            <span className="isto">:</span>
            <p className="ObjValue">
              <span>"</span>
              <span contentEditable>{`enter your subject here`}</span>
              <span>"</span>
            </p>
            <span>{","}</span>
          </div>
        </div>

        <div className="codeLine">
          <p className="codeNumber">9</p>
          <div className="code indented">
            <span className="Objkey">description</span>
            <span className="isto">:</span>
            <p className="ObjValue">
              <span>"</span>
              <span contentEditable>{`enter your email description`}</span>
              <span>"</span>
            </p>
            <span>{","}</span>
          </div>
        </div>

        <div className="codeLine">
          <p className="codeNumber">10</p>
          <p className="code">
            <span className="curlyBracket">{"}"}</span>
            <span>{";"}</span>
          </p>
        </div>

        <div className="codeLine">
          <p className="codeNumber">11</p>
        </div>

        <div className="codeLine">
          <p className="codeNumber">12</p>
        </div>

        <div className="codeLine">
          <p className="codeNumber">13</p>
          <div className="code">
            <span className="variable">{"const"}</span>
            <span className="variable">{"async"}</span>
            <span>{"onBtnClickHandeler"}</span>
            <span>{"="}</span>
            <p>
              <span style={{ color: "yellow" }}>{"("}</span>
              <span>{"e"}</span>
              <span style={{ color: "yellow" }}>{")"}</span>
            </p>
            <span>{"=>"}</span>
            <span className="curlyBracket">{"{"}</span>
          </div>
        </div>

        <div className="codeLine">
          <p className="codeNumber">14</p>
          <div className="code indented">
            <p>
              <span>e.PreventDefault</span>
              <span style={{ color: "yellow" }}>{"("}</span>
              <span style={{ color: "yellow" }}>{")"}</span>
              <span>;</span>
            </p>
          </div>
        </div>

        <div className="codeLine">
          <p className="codeNumber">15</p>
          <div className="code indented">
            <p>
              <span className="variable">try</span>
              <span className="curlyBracket">{"{"}</span>
            </p>
          </div>
        </div>

        <div className="codeLine">
          <p className="codeNumber">16</p>
          <div className="code doubleIndented">
            <span className="variable">await</span>
            <span>axios.post</span>
            <p>
              <span style={{ color: "yellow" }}>{"("}</span>
              <span className="ObjValue">`</span>
              <span className="variable">$</span>
              <span style={{ color: "yellow" }}>{"{"}</span>
              <span>{"FORM_SUBMIT_URL"}</span>
              <span style={{ color: "yellow" }}>{"}"}</span>
              <span className="ObjValue">{".json"}</span>
              <span className="ObjValue">`</span>
              <span>{","}</span>
              <span>enteredInputObj</span>
              <span style={{ color: "yellow" }}>{")"}</span>
            </p>
          </div>
        </div>

        <div className="codeLine">
          <p className="codeNumber">17</p>
          <div className="code indented">
            <span className="curlyBracket">{"}"}</span>
            <span className="variable">{"catch"}</span>
            <span className="curlyBracket">{"("}</span>
            <span>{"error"}</span>
            <span className="curlyBracket">{")"}</span>
            <span className="curlyBracket">{"{"}</span>
          </div>
        </div>

        <div className="codeLine">
          <p className="codeNumber">18</p>
          <div className="code doubleIndented">
            <p>
              <span>console.log</span>
              <span className="curlyBracket">{"("}</span>
              <span>{"error"}</span>
              <span className="curlyBracket">{")"}</span>
            </p>
          </div>
        </div>

        <div className="codeLine">
          <p className="codeNumber">19</p>
          <div className="code indented">
            <p>
              <span className="curlyBracket">{"}"}</span>
              <span>{";"}</span>
            </p>
          </div>
        </div>

        <div className="codeLine">
          <p className="codeNumber">20</p>
          <div className="code">
            <p>
              <span className="curlyBracket">{"}"}</span>
              <span>{";"}</span>
            </p>
          </div>
        </div>

        <div className="codeLine">
          <p className="codeNumber">21</p>
          <div className="code">
            <p>
              <span>{"document.querySelector"}</span>
              <span className="curlyBracket">{"("}</span>
              <button className="btnSubmit">FORM SUBMIT</button>
              <span className="curlyBracket">{")"}</span>
              <span>{".addEventListener"}</span>
              <span className="curlyBracket">{"("}</span>
              <span className="ObjValue">{`"click"`}</span>
              <span>{`,`}</span>
              <span>{`onBtnClickHandeler`}</span>
              <span className="curlyBracket">{")"}</span>
              <span>{";"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
