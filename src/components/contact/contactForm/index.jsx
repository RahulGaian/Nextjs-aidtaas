import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { getDatabase, ref as dbRef, push, set } from "firebase/database";
import st from "./index.module.css";
import Img from "../../Image";
import { useNavigate } from 'react-router-dom';


const firebaseConfig = {
  apiKey: "AIzaSyCcSHRELwxwi_Hk2cA3aJiTx5eKQ4tM9a0",
  authDomain: "aidtaas.firebaseapp.com",
  databaseURL: "https://aidtaas-default-rtdb.firebaseio.com/",
  projectId: "aidtaas",
  storageBucket: "aidtaas.appspot.com",
  messagingSenderId: "1073406400596",
  appId: "1:1073406400596:web:65cb37ce14d27cad23f5c1",
  measurementId: "G-RF85HMVMJ4",
};
const app3 = initializeApp(firebaseConfig);
const database3 = getDatabase(app3);
const imgstorage = getStorage(app3);

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const contactRef = dbRef(database3, "contacts");
    const newContactRef = push(contactRef);
    set(newContactRef, {
      name,
      email,
      phoneNumber,
      company,
      message,
    });

    setSent(true);
    setName("");
    setEmail("");
    setPhoneNumber("");
    setCompany("");
    setMessage("");
  };

  const handleClose = () => {
    navigate(-1);
  }


  return (
    <div className={st.contentContainer}>
      <div className={st.mainCont}>
        {!sent ? (
          <div className={st.modalContainer}>
            <div className={st.fdiv}>
              <h2 className={st.h11}>Get in Touch</h2>
              <Img src="./cross.png" onClick={handleClose}></Img>
            </div>
            <h2 className={st.h22}>Our team would love to hear from you.</h2>
            <br />
            <form onSubmit={handleSubmit} className={st.form}>
              <label>
                Name*
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className={st.inputField}
                  required
                />
              </label>

              <br />
              <br />
              <label>
                Company name*
                <input
                  type="text"
                  name="company"
                  onChange={(e) => setCompany(e.target.value)}

                  className={st.inputField}
                  required
                />
              </label>
              <br />
              <br />
              <label>
                Business Email*
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}

                  className={st.inputField}
                  required
                />
              </label>
              <br />
              <br />
              <label>
                Phone Number*
                <PhoneInput
                  className={st.inputField}
                  id={st.phinpt}
                  placeholder="Enter phone number"
                  defaultCountry="US"
                  value={phoneNumber}
                  required
                  onChange={(value) => setPhoneNumber(value)}
                />
              </label>
              <br />
              <br />
              <label>
                Message*
                <textarea
                  type="text"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  className={st.inputField}
                  id={st.txtArea}
                  required
                />
              </label>

              <br />
              <br />
              <button type="submit" className={st.submitButton}>
                Send message
              </button>
            </form>
          </div>
        ) : (
          // <h1 className={st.h111}>Our Team will contact you shortly</h1>
          <div className={st.tTemp}>
            <h1>THANK YOU!</h1>
            <Img src="./msg.png"></Img>
            <p>Your message has been received <br /> we will contact you very soon!!</p>
            <button onClick={handleClose}>Continue</button>
          </div>

        )}
      </div>
    </div>
  );
};

export default ContactForm;
