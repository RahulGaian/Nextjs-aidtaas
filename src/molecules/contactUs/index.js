"use client";

import styles from "./index.module.css";
import Button from "../../components/buttons/index";
// import { ContactUsData } from "./data";

let ContactUs = ({ data }) => {
  return (
    <section className={styles.pre}>
      <div className={styles.preCon}>
        {data.map((item, index) => (
          <div key={index}>
            <div>
              <h1 className={styles.preHeading}>{item.heading}</h1>
            </div>
            <div>
              <h1 className={styles.preContent}>{item.content}</h1>
            </div>
            <div>
              <Button
                text={item.btn}
                filled={true}
                url={item.url}
                openInNewTab={true}
                className="buttonbottom"
              ></Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;
