import React from "react";
import "./index.css";
import BlogSingle from "../Blogsinglepage";
// import images from "../../../constants/images";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase, ref as dbRef, push, set } from "firebase/database";

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

function Blogmain() {
  const changeRoute = (Route) => {
    window.location.href = Route;
  };

  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subscriberRef = dbRef(database4, "subscribers");
    const newSubscriberRef = push(subscriberRef);
    set(newSubscriberRef, {
      email,
    }).then(() => {
      setMessage("Thank you for subscribing!");
      setSent(true);
      // setTimeout(() => {
      //   setSent(false);
      //   setMessage("");
      //   setEmail("");
      // }, 3000);
    }).catch((error) => {
      setMessage("Error: " + error.message);
    });
  };

  return (
    <>
      <div className="blogmain">
        <div className="pt4 maintitle paddingmain">
          <span className="head">Life @ </span>
          <span className="colorhead">Gaian</span>
        </div>
        <div className="pt4 topposts paddingmain">
          <div
            className="toppost1"
            onClick={() => {
              // changeRoute("careeropenings");
              changeRoute("comingsoon");
            }}
          >
            <div className="contenttop">
              <span>Beyond the Code :</span>
              <span>
                {" "}
                Emphasizing the Human Aspect in AI Development and Digital
                Transformation
              </span>
            </div>
          </div>

          <div className="toppost2">
            <div className="contenttop">
              <span>Future-Proof Your Organization :</span>{" "}
              <span>
                Cultivating a Culture of Learning and Innovation in the Age of
                AI
              </span>
            </div>
          </div>
        </div>
        <div className="pt4 bottomposts pb4 paddingmain">
          <div className="bottom1">
            <div className="btimg3">
              <div className="contenttop">
                <span> Building a More Inclusive Digital World :</span>
                <span> The Role of Universal Design </span>
              </div>
            </div>

            <div className="btimg4">
              <div className="content1">Behind the Scenes at Mobius</div>
            </div>
          </div>
          <div className="bottom2">
            <div className="bottom2main">
              <div className="content1">
                How AI Is Revolutionizing the broadcast industry in the USA
              </div>
            </div>
          </div>
        </div>

        <div className="pt4 newsletters">
          <div className="newscontent">
            <div className="newstitle pt2">
              Subscribe To our Newsletter{" "}
              <span className="colorblue">Innovation</span>
            </div>
            <div className="newsdesc pt2">
            Sign up to get news alerts,behind the scenes Insights,and research
          from salesforce news and Insights
            </div>
            {!sent ? (
                  <form onSubmit={handleSubmit} className="form">
                  <div className="mailinput">
                    <p className="emailhead">Email address</p>
                    <input type="email" value={email} onChange={(e => setEmail(e.target.value))} id="emailinput" required />
                  </div>
                  <div className="buttoncont">
                    <button id="sbBtn" type="submit">Subscribe</button>
                  </div>
                  </form>
        ) : (
          <p id="msg">{message}</p>
        )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Blogmain;
