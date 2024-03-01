import React from "react";
import styles from "./index.module.css";

// import Img from "next/image";
import Image from "next/image";

const Benefits = ({ benefitsData }) => {
  return (
    <div>
      <section className={styles.benefitsContainer}>
        {/* <div className="decoratorb-1"></div>
        <div className="decoratorb-2"></div> */}

        <div className={styles.benefitsBoxHeading}>
          <h1>Benefits</h1>
        </div>

        <div className={styles.benefitsCardsContainer}>
          {benefitsData.map((benefit, idx) => (
            <div className={styles.benefitsCardWrapper} key={idx}>
              <div className={styles.platformBenefitImage}>
                <Image
                  src={benefit.imageUrl}
                  alt="AI logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.benfitsDetails}>
                <h1>{benefit.heading}</h1>
                <p>{benefit.description ? benefit.description : benefit.paragraph}</p>
              </div>
              {/* <div className="benfitsDetails">
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Benefits;
