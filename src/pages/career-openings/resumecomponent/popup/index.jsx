import React, { useState } from "react";
import Modal from "react-modal";
import Img from "../../../../components/Image";
import images from "../../../../constants/images";
import { v4 } from "uuid";
import "./index.css";
import { database2, imgstorage } from "../firebase-config";
import { push, ref as ref2 } from "firebase/database";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import RedirectTimer from "../../../../marketing/RedirectionTimer";

const Popup = ({ isOpen, onClose, alerting, setalerting }) => {
  // const storage = getStorage(database2);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("Select an Option");
  const [resume, setResume] = useState(" ");
  const [resumecontainer, setresumecontainer] = useState(false);
  let [submit, setSubmit] = useState(true);

  const handleSubmit = () => {
    if (
      !name ||
      !email ||
      !phone ||
      department === "Select an Option" ||
      resume === " "
    ) {
      // alert('Please fill in all required fields.');
      setalerting(true);
    } else {
      const ApplicantsData = { name, email, phone, department, resume };
      if (resume !== " ") {
        console.log(resume);
        push(ref2(database2, "Applicants_data"), {
          ApplicantsData,
        });
      }
      setSubmit(false);
      setalerting(false);
    }
  };
  //   const changeRoute=(Route)=>{
  //     window.locati.on.href=Route
  // }

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const imagesfolder = ref(imgstorage, `Imgs${v4()}`);
    uploadBytes(imagesfolder, selectedFile)
      .then((data) => {
        getDownloadURL(data.ref).then((val) => {
          setResume(val);
        });
      })
      .then(setresumecontainer(true));
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    const imagesfolder = ref(imgstorage, `Imgs${v4()}`);
    uploadBytes(imagesfolder, droppedFile)
      .then((data) => {
        getDownloadURL(data.ref).then((val) => {
          setResume(val);
        });
      })
      .then(setresumecontainer(true));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const [rotation, setRotation] = useState(360);
  const [isselectopen, setisselectopen] = useState(false);
  const handleSelect = () => {
    setRotation(rotation + 180);
    if (isselectopen === true) {
      setisselectopen(false);
    } else setisselectopen(true);
  };
  const fileInputRef = React.useRef(null);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modalcontainer"
      overlayClassName="custom-overlay"
      ariaHideApp={false}
    >
      {/* <div className="formcontent">
                  
               
              </div> */}
      {submit ? (
        <div className="formcontent">
          <div>
            <div onSubmit={handleSubmit} className="formcontainermain">
              <div className="applyformtitle">
                Great Oppurtunities Awaits You
              </div>
              <div className="form-group">
                <label htmlFor="First Name" className="formlabel">
                  Full Name*
                </label>
                <br />
                <input
                  className="formcontentcontainer"
                  name="first"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Business Email" className="formlabel">
                  Email*
                </label>
                <br />
                <input
                  className="formcontentcontainer"
                  type="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Phone" className="formlabel">
                  Phone *
                </label>
                <br />
                <input
                  className="formcontentcontainer"
                  name="Phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Job Title" className="formlabel">
                  Department *
                </label>
                <br />
                <div
                  className="formselectcontainer"
                  name="Job"
                  onClick={() => {
                    handleSelect();
                  }}
                >
                  <div
                    onChange={(e) => {
                      setDepartment(e.target.value);
                    }}
                  >
                    {department}
                  </div>
                  <div
                    onClick={() => {
                      handleSelect();
                    }}
                  >
                    <Img
                      src={images.Arrow}
                      style={{
                        transform: `rotate(${rotation}deg)`,
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </div>
                </div>
              </div>
              {isselectopen ? (
                <div className="selectdropdown">
                  <div
                    onClick={() => {
                      setDepartment("Design");
                      handleSelect();
                    }}
                  >
                    Design
                  </div>
                  <div
                    onClick={() => {
                      setDepartment("Engineering");
                      handleSelect();
                    }}
                  >
                    Engineering
                  </div>
                  <div
                    onClick={() => {
                      setDepartment("Product");
                      handleSelect();
                    }}
                  >
                    Product
                  </div>
                  <div
                    onClick={() => {
                      setDepartment("Sales & Marketing");
                      handleSelect();
                    }}
                  >
                    Sales & Marketing
                  </div>
                  <div
                    onClick={() => {
                      setDepartment("Support");
                      handleSelect();
                    }}
                  >
                    Support
                  </div>
                  <div
                    onClick={() => {
                      setDepartment("Others");
                      handleSelect();
                    }}
                  >
                    Others
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div className="form-group">
                <label htmlFor="resume" className="formlabel">
                  Upload Resume(PDF,PNG & JPG only ) *
                </label>
                <br />
                <div
                  className="formcontentcontainer2"
                  onDrop={handleFileDrop}
                  onDragOver={handleDragOver}
                  required
                >
                  <div>
                    <div
                      // type="button"
                      // className="filebutton"
                      onClick={handleFileButtonClick}
                    >
                      <Img src={images.Uploadbutton} />
                    </div>
                  </div>
                  <div>Choose a File or Drag it Here</div>
                  {resumecontainer ? (
                    <div className="file-details">
                      <span> File Uploaded &nbsp;</span>
                    </div>
                  ) : (
                    <div className="upload-progress">
                      {/* <progress value="0" max="100"></progress> */}
                      {/* <div>Choose a File or Drag it Here</div> */}
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".png, .pdf, .jpg, .jpeg"
                    className="hidden-file-input"
                    name="resume"
                    onChange={handleFileChange}
                    //  onChange={(e=>{setResume(e.target.value)})}
                    required
                  />
                </div>
              </div>

              <div className="formbutton">
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                    console.log("submitted");
                  }}
                >
                  Apply Now
                </button>
              </div>
              {alerting ? (
                <div className="alertmessage">
                  Please fill in all required fields.
                </div>
              ) : (
                <></>
              )}
              <div className="formbottomcontent">
                By submitting this form, I confirm that I have read and agree to
                the <a href="/terms-and-conditions">Privacy Statement</a> &{" "}
                <a href="/terms-and-conditions">Terms and Conditions</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="formcontent">
          <div className="backsidecontainer">
            <div className="backsidecontainercontent">
              Thank you for submission.
              <br />
              Our team will get in touch to get you started.
            </div>
            <div>
              <RedirectTimer></RedirectTimer>

            </div>
            {/* <div><RedirectTimer></RedirectTimer></div> */}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Popup;
