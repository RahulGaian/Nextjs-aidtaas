import React from "react";
// import images from "../../constants/images";
// import Pagination from 'react-bootstrap/Pagination';
import "./index.css";
import Paginationdatamain from "./pagination_data";
import Resume from "./resumecomponent";
// import { PaginationItem } from "@mui/material";
import { useSelector } from "react-redux";
export const Jobspage = () => {
  // const data=[
  //     {
  //         title:"Devops Engineer",
  //         description:"Java, Javacript,AWS, Jenkins, Kubernetes",
  //         location:"Hyderabad",
  //         experience:"5+ years experience",
  //         url:"/jobdescriptions/devops-engineer",
  //         },{
  //         title:"Java Developer",
  //         description:"Java, Core Java, Programming, Sql,Plsql,Rest",
  //         location:"Hyderabad",
  //         experience:"2+ years experience",
  //         url:"/jobdescriptions/java-developer",
  //         },
  //         {
  //         title:"QA Automation",
  //         description:"Automation, Selenium with Java, Cypress, Mocha, Cucumber, Performance Testing",
  //         location:"Hyderabad",
  //         experience:"5+ years experience",
  //         url:"/jobdescriptions/QA-Automation",
  //         },
  //         {
  //         title:"Sr.Technical Writer",
  //         description:"User persona, Product, Technical Documentation, Technical Writing Tools",
  //         location:"Hyderabad",
  //         experience:"8+ years experience",
  //         url:"/jobdescriptions/Sr-writer",
  //         },
  //         {
  //         title:"Technical Support Engineer L3",
  //         description:"API, Linux, Troubleshoot, Networking, Snaplogic, AWS, Mulesoft",
  //         location:"Hyderabad",
  //         experience:"2+ years experience",
  //         url:"/jobdescriptions/tech-support-engineer",
  //         },
  //         {
  //         title:"Platform Architect",
  //         description:"Platform Architect, AWS, Kubernetes, Docker, Cloudcomputing, Enterprise Architecture",
  //         location:"Hyderabad",
  //         experience:"8+ years experience",
  //         url:"/jobdescriptions/platform-architect"
  //         },
  //         {
  //             title:"Android Developer",
  //             description:"Java, Javacript, Kotlin,HTML",
  //             location:"Hyderabad",
  //             experience:"3+ years experience",
  //             url:"/jobdescriptions/android-developer"
  //             },{
  //             title:"Data Systems -SRE and support role",
  //             description:"Java, Mongo DB, Kubernate, Python, ",
  //             location:"Hyderabad",
  //             experience:"5+ years experience",
  //             url:"/jobdescriptions"
  //             },
  //             {
  //             title:"Devops Architect",
  //             description:"AWS, Docker, Git, Kubernetes, Nagios, SignalFx, AppDynamics, Jenkins, Puppet, and Ansel",
  //             location:"Hyderabad",
  //             experience:"10 years experience",
  //             url:"/jobdescriptions"
  //             },
  //             {
  //             title:"Head of Knowledge Management",
  //             description:"Documentation",
  //             location:"Hyderabad",
  //             experience:"10+ years experience",
  //             url:"/jobdescriptions/head-of-knowledge-management"
  //             },
  //             {
  //             title:"IT Manager",
  //             description:"networking, cybersecurity, servers",
  //             location:"Hyderabad",
  //             experience:"10+ years experience",
  //             url:"/jobdescriptions/IT-manager"
  //             },
  //             {
  //             title:"Platform Engineer",
  //             description:"API's,AWS,Agile, Ansible,Azure, CI/CD,Cloud Infrastructure",
  //             location:"Hyderabad",
  //             experience:"8+ years experience",
  //             url:"/jobdescriptions/platform-engineer"
  //             },{
  //             title:"Professional Services",
  //             description:"ETL, Intergrations, development experience, Snaplogic, informatica ",
  //             location:"Hyderabad",
  //             experience:"5+ years experience",
  //             url:"/jobdescriptions/professional-services"
  //             },
  //             {
  //             title:"QA Manager",
  //             description:" Customer service skills,Strong analytical,Problem solving, Automation, Selenium, Java, Cypress, Mocha, Cucumber",
  //             location:"Hyderabad",
  //             experience:"10+ years experience",
  //             url:"/jobdescriptions/QA-Manager"
  //             },
  //             {
  //             title:"Product Manager",
  //             description:"ETL, Integration, SAP",
  //             location:"Hyderabad",
  //             experience:"5+ years experience",
  //             url:"/jobdescriptions"
  //             },
  // ]
  const buttondata = "Send Resume";
  const Data2 = useSelector((state) => state.jobOpenings);
  console.log(Data2);
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
        {/* <div className="jobtopcontent">
                   <div className="headingmain"> Do your life's <span className="colorheading">Best Work</span> Here !
                    </div> 
                    <div>  
                        <p className="topcontentdescription">
                    At Gaian we encourage to explore various skills across domains to drive flourishing growth .
                    </p>
                    </div>
          </div> */}
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
