import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const Features = ({ featureData }) => {
  if (!featureData || featureData.length === 0) {
    return null;
  }
  return (
    <div className={styles.featureContainer}>
      <div className={styles.featureBoxHeadingplt}>
        <h1>Features</h1>
      </div>

      <div className={styles.cardsContainer}>
        {featureData.map((feature, idx) => (
          <div className={styles.cardWrapper} key={idx}>
            <div className={styles.cardImgContainer}>
              <Image
                src={feature.imageUrl}
                alt="DataBaseCloudimage"
                width={350}
                height={350}
                // cover priority layout="responsive"
                priority
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardDetailContainer}>
              <h1>{feature.heading}</h1>
              <p>
                {feature.description ? feature.description : feature.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
