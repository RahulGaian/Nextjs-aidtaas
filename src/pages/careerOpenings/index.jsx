import React from "react";
// import images from "../../constants/images";
// import Pagination from 'react-bootstrap/Pagination';
import "./index.css";
import Paginationdatamain from "../../components/career-openings/pagination_data";
import Resume from "../../components/career-openings/resumecomponent";
// import { PaginationItem } from "@mui/material";
import { Jobopeningsdata as Data2 } from "../../components/career-openings/jobopenings_dataHr";
const Jobspage = () => {
  const buttondata = "Send Resume";
  // console.log(Data2);
  const itemsPerPage = 15;
  return (
    <>
      <div className="jobs_main_container">
        <div className="maincomponentopeningspage">
          <div className="jobtopcontent">
            <div className="headingmain">
              {" "}
              Do your life's <span className="colorheading">
                Best Work
              </span>{" "}
              Here !
            </div>
            <div>
              <p className="topcontentdescription">
                At Gaian we encourage to explore various skills across domains
                to drive flourishing growth .
              </p>
            </div>
          </div>
        </div>
        <div className="Joblistcontent">
          <Paginationdatamain
            data={Data2}
            itemsPerPage={itemsPerPage}
          ></Paginationdatamain>
        </div>
        <div className="Jobbottomcont">
          <div className="Jobbottomcont1">
            <div className="Jobspagetitlebottom ">
              Do Your Life's<span className="Jobscolorblue"> Best Work </span>{" "}
              Here !
            </div>

            <div className="Jobspagedescbottom ">
              At Gaian we encourage to explore various skills across domains to
              drive flourishing growth .
            </div>
            <div className="Jobspagebtnbottom">
              <Resume buttondata={buttondata}></Resume>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobspage;
