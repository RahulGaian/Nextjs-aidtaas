import Image from "next/image";
import Img from "../../components/Image";
// import { useState, useEffect } from "react";
import styles from "./index.module.css";

const SpeakExpert = () => {
  return (
    <div className={styles.secContainerSP1} id="resources">
      <div className={styles.secContentContainerSP}>
        <div className={styles.leftdiv}>
          <h1>Get in touch with our Certified Solutions Expert</h1>
          <h5>Get expert assistance on Custom Solutions and Enquiries</h5>
          <button
            onClick={() => {
              window.open(
                "https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7"
              );
            }}
          >
            Speak to an Expert
          </button>
        </div>
      </div>
      <div className={styles.rightdiv}>
        {/* <Img id="imagesec" src={"/images/Security/8.png"}></Img> */}
        <Image
          id="imagesec"
          src={"/images/Security/8.png"}
          width={0}
          height={0}
        ></Image>
      </div>
    </div>
  );
};

export default SpeakExpert;
