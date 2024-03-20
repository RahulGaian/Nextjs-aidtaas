import React, { useState } from "react";
import Popup from "./popup";

const Resume = (props) => {
  const buttondata = props.buttondata;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [alerting, setalerting] = useState(false);
  //   const [userData, setUserData] = useState(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setalerting(false);
  };

  return (
    <div>
      <button onClick={openPopup}>{buttondata}</button>
      <Popup
        isOpen={isPopupOpen}
        setIsOpen={setIsPopupOpen}
        onClose={closePopup}
        alerting={alerting}
        setalerting={setalerting}
      />
      {/* 
      {userData && (
        <div>
          <h2>User Data:</h2>
          
        </div>
      )} */}
    </div>
  );
};

export default Resume;
