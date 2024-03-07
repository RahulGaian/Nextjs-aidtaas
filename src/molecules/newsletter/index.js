"use client";
import st from "./index.module.css";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase, ref as dbRef, push, set } from "firebase/database";

const NewsLetter = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sent, setSent] = React.useState(false);

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
    <div className={st.container}>
      <div className={st.contentContainer}>
        <span>
          Subscribe To our Newsletter{" "}
          <span style={{ color: "#007ad1" }}>Innovation</span>
        </span>
        <span id={st.para}>
          Sign up to get news alerts,behind the scenes Insights,and research
          from salesforce news and Insights
        </span>
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
    </div>
  );
};

export default NewsLetter;
