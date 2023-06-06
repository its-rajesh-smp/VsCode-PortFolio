import React from "react";
import "./MyJourney.css";
import JourneyDiv from "../../Components/UI/MyJourney/JourneyDiv";
import HeaderContainer from "../../Components/UI/HeaderContainer/HeaderContainer";
import JourneyScreenBackground from "../../Animations/JourneyScreenBackground/JourneyScreenBackground";

function MyJourney(props) {
  return (
    <div className=" MyJourney-div pageContainer">
      <JourneyScreenBackground />
      <div className="MyJourney-div__big_container">
        <HeaderContainer
          src={"https://cdn-icons-png.flaticon.com/512/2038/2038466.png"}
          text={"JOURNEY"}
        />
        <div className="MyJourney-div__container">
          <JourneyDiv h2={"PRESENT"} h3={"Frontend Developer"} />
          <JourneyDiv h2={"December 19th 2022"} h3={"Joined Sharpener"} />

          <JourneyDiv h2={"April 05th 2022"} h3={"Resigined First Company"}>
            <ul>
              <li>JobRole: Diploma Engineer Trainee | Production</li>
              <li>CompanyName: Anand ACYM pvt. ltd</li>
              <li>Location: Gourgaon | Hariyana </li>
              <li>Duration: Decembar 2021 - April 2022</li>
            </ul>
          </JourneyDiv>

          <JourneyDiv h2={"Octobar 03th 2021"} h3={"Passsout From Collage"}>
            <ul>
              <li>Course: Diploma in Mechanical Engineer</li>
              <li>Location: Bankura | WestBangal </li>
              <li>CourseDuration: 2018 - 2021</li>
            </ul>
          </JourneyDiv>

          <JourneyDiv h2={"2018"} h3={"Completed Higher Secondary"}>
            <ul>
              <li>Course: Science</li>
              <li>SchoolName: Simlapal M.M High School</li>
              <li>Location: Bankura | WestBangal </li>
            </ul>
          </JourneyDiv>

          <JourneyDiv h2={"2016"} h3={"Completed Secondary"}>
            <ul>
              <li>SchoolName: Simlapal M.M High School</li>
              <li>Location: Bankura | WestBangal </li>
            </ul>
          </JourneyDiv>

          <JourneyDiv h2={"09/11/2000"} h3={"DOB"} />
        </div>
      </div>
    </div>
  );
}

export default MyJourney;
