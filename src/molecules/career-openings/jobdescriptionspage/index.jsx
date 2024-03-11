import React from "react";
import St from "./index.module.css";
// import images from "../../../constants/images";
import Img from "../../../components/Image";
import Resume from "../resumecomponent";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Jobopeningsdata as jobData } from "../jobopenings_dataHr"; //this one

const Jobdescriptions = () => {
  //    const jobData = useSelector((state)=> { console.log(state); return state.jobOpenings})
  const [data, setContent] = useState(null);
  //   let { id } = useParams();

  //   // console.log(jobData)
  //   useEffect(() => {
  //     //console.log(id);
  //     console.log("id:", id);
  //     console.log("jobData:", jobData);

  //     let data1 = jobData.find((item) => item.url === id); //this one
  //     setContent(data1);
  //   }, [id, jobData]);
  //   const buttondata = "Apply Now";
  //   // console.log(id)
  return (
    <>
      {/* {data ? (
        <div className={St.maincomponentjd}>
          <div className={St.maincontainer + " "}>
            <div className={St.container1}>
              <div className={St.headfont}>{data.title}</div>
              <div className={St.contentfont}>{data.jobdescription}</div>
              <div className={St.bottomcontent}>
                <div className={St.bottomcontent1}>
                  <div>
                    {" "}
                    <Img
                      src={"/imagesnew/Career/career_bottom_card_icon_01.svg"}
                      className=""
                    />
                  </div>
                  <div className={St.contentfont}>{data.location}</div>
                </div>
                <div className={St.bottomcontent2}>
                  <div>
                    {" "}
                    <Img
                      src={"/imagesnew/Career/Career_bottom_card_icon_02.svg"}
                      className=""
                    />
                  </div>
                  <div className={St.contentfont}>{data.experience}</div>
                </div>
              </div>
            </div>

            <div className={St.container2}>
              {data.listmain.map((item) => {
                return (
                  <>
                    <div className={St.headfont}>{item.head}</div>
                    <div>
                      <ul className={St.liststyledisc}>
                        {item.listdescription.map((item2) => {
                          return (
                            <>
                              <li className={St.contentfont}>{item2.list}</li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                );
              })}
            </div>

            <div className={St.bottombtn}>
              <div className={St.applybtn}>
                <Resume buttondata={buttondata}></Resume>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )} */}
    </>
  );
};

export default Jobdescriptions;
