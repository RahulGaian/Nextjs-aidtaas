import React from "react";
// import { useEffect } from 'react';
// import images from '../../../constants/images';
import "./index.css";
import Img from "../../Image";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Jobopeningsdata as data } from "../../../pages/career-openings/jobopenings_dataHr";
// import {fetchJobOpenings}  from './../../../Redux/Jobopeningsdata'
function Jobopenings() {
  const ChangeRoute = (Route) => {
    window.location.href = Route;
  };
  //    const [activeButton, setActiveButton] = useState(null);

  //    const handleButtonClick = (index) => {
  //      setActiveButton(index);
  //    };

  //    const buttonData = [
  //      'All Departments',
  //      'Design',
  //      'Engineering',
  //      'Product',
  //      'Sales & Marketing',
  //      'Support'
  //    ];
  const changeRoute = (Route) => {
    window.location.href = Route;
  };
  // import Career_bottom_card_icon_01 from '../images/Career/career_bottom_card_icon_01.svg'
  // import Career_bottom_card_icon_02 from '../images/Career/Career_bottom_card_icon_02.svg'

  return (
    <>
      <div className="jobopeningscomponent">
        <div className="top_content">
          <div className="openingshead">
            <h1>Work at Mobius</h1>
          </div>

          {/* <div className='openingheadtitles'>
      {buttonData.map((label, index) => (
        <div
          key={index}
          className={`headtitle ${activeButton === index ? 'buttonactivehead' : 'nonactivehead'}`}
          onClick={() => handleButtonClick(index)}
        >
          {label}
        </div>
      ))}
    </div> */}
        </div>
        <div className="Jobopeningsmain">
          {data.length > 0 ? (
            data.slice(0, 6).map((item, index) => (
              <div
                className="grid-item"
                key={index}
                onClick={() => {
                  ChangeRoute(`jobdescriptions/${item.url}`);
                }}
              >
                <div className="grid-head">{item.title}</div>
                <div className="grid-desc">{item.description}</div>
                <div className="grid-bot">
                  <div className="grid-bot1">
                    <div>
                      <Img
                        src={"/imagesnew/Career/career_bottom_card_icon_01.svg"}
                        className=""
                      />
                    </div>
                    <div className="">{item.location}</div>
                  </div>
                  <div className="grid-bot2">
                    <div>
                      {" "}
                      <Img
                        src={"/imagesnew/Career/Career_bottom_card_icon_02.svg"}
                        className=""
                      />
                    </div>
                    <div className="grid-exp">{item.experience}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="openingsbottom3">
          <div
            className="openingsbutton"
            onClick={() => {
              changeRoute("careeropenings");
            }}
          >
            View All Openings
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobopenings;
