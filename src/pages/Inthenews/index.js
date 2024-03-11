import React from "react";
import st from "./index.module.css";
import Paginationdatamain from "../../components/pagination_datanews";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase, ref as dbRef, push, set } from "firebase/database";
import Image from "next/image";

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
const app4 = initializeApp(firebaseConfig);
const database4 = getDatabase(app4);
const imgstorage = getStorage(app4);

const IntheNews = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const dataArray = [
    {
      imgSrc: "/imagesnew/InTheNews/nw1.png",
      heading:
        "ATSC Members Shine with 2022 NAB Show Product of the Year Honors",
      readMore: "Read more",
    },
    {
      imgSrc: "/imagesnew/InTheNews/nw2.png",
      heading:
        "New Gaian Solutions Monetization Platform Accelerates ATSC 3.0 Commercialization",
      readMore: "Read more",
    },
    {
      imgSrc: "/imagesnew/InTheNews/nw3.png",
      heading: "Public Broadcasters Prepare for NextGen TV Opportunities",
      readMore: "Read more",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const subscriberRef = dbRef(database4, "subscribers");
    const newSubscriberRef = push(subscriberRef);
    set(newSubscriberRef, {
      email,
    })
      .then(() => {
        setMessage("Thank you for subscribing!");
        setSent(true);
      })
      .catch((error) => {
        setMessage("Error: " + error.message);
      });
  };

  return (
    <section className={st.maincont}>
      <div className={st.main}>
        <div className={st.bg2black}>
          <div className={st.text1}>In The News</div>
        </div>
      </div>
      <div className={st.mainheading}>
        <span> Our Story through News reports</span>
      </div>
      <div className={st.bgImg}>
        <Paginationdatamain data={dataArray} itemsPerPage={3} />
      </div>

      <div className={st.cont}>
        <div className={st.mailimg}>
          <Image src="/imagesnew/InTheNews/Envelope.png" alt="" width={52} height={45} priority/>
        </div>
        <h1>Get the latest mobius News</h1>
        <p className={st.description}>
          Sign up to get news alerts,behind the scenes Insights,and research
          from salesforce news and Insights
        </p>
        {!sent ? (
          <form onSubmit={handleSubmit} className={st.form}>
            <div className={st.mailinput}>
              <p className={st.emailhead}>Email address</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id={st.emailinput}
                required
              />
            </div>
            <div className={st.buttoncont}>
              <button id={st.sbBtn} type="submit">
                Subscribe
              </button>
            </div>
          </form>
        ) : (
          <p id={st.msg}>{message}</p>
        )}
      </div>
    </section>
  );
};

export default IntheNews;
