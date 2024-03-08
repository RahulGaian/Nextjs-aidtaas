import React from "react"
import "./index.css"
import { database2 } from "../firebase-config"
import { useState,useEffect } from "react";
import { ref, get } from 'firebase/database';
const JobApplicantspage = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const applicantsArray = [];

      const applicantsRef = ref(database2, 'Applicants_data');
      const snapshot = await get(applicantsRef);

      if (snapshot.exists()) {
        const applicantsData = snapshot.val();

        for (const key in applicantsData) {
          const innerFileData = applicantsData[key];
          applicantsArray.push(innerFileData.ApplicantsData);
        }

        setApplicants(applicantsArray); // Update the state with fetched data
      } else {
        console.log('No data available');
      }
    };

    fetchData();
  }, []); // Run this effect only once, on component mount

  return (
    <>
      <div className="mainpagejobapplicants">
        <div className="heading">
          <h1>Applied candidates</h1>
        </div>
        <div className="appliedcandidates">
        {applicants.map((applicant, index) => (
            <div key={index} className="candidatefolder">
              <div className="candidatefolderdiv" ><span>Name :</span><span>&nbsp;{applicant.name}</span></div>
              <div className="candidatefolderdiv"><span>Email :</span><span>&nbsp;{applicant.email}</span></div>
              <div className="candidatefolderdiv"><span>phone :</span><span>&nbsp;{applicant.phone}</span></div>
              <div className="candidatefolderdiv"><span>department :</span><span>&nbsp;{applicant.department}</span></div>
              <div className="candidatefolderdiv"><span><a href={applicant.resume} target="_blank" rel="noopener noreferrer">
                  Open Resume
                </a></span></div>
              {/* <p>
                <a href={applicant.resume} target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </p> */}
            </div>
          ))}
        </div>
        
        
      </div>
    </>
  );
};

export default JobApplicantspage;























 // const applicants=[]
    //     const applicantsRef = ref(database2, 'Applicants_data');
    //     const snapshot =  get(applicantsRef);
    
    //     if (snapshot.exists()) {
    //       // snapshot.val() will contain an object with keys for each inner file
    //       const applicantsData = snapshot.val();
          
    //       // Now you can loop through the inner files
    //       for (const key in applicantsData) {
    //         const innerFileData = applicantsData[key];
    //         applicants.push(innerFileData.ApplicantsData)
    //       }
    //     } else {
    //       console.log('No data available');
    //     }
    //     console.log(applicants[0])
    //     console.log(applicants[0].name)
    //     console.log(applicants[0].phone)
    //     console.log(applicants[0].department)
    //     console.log(applicants[0].email)
    //     console.log(applicants[0].resume)