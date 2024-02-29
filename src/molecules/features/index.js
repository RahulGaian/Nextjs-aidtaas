import React from "react";
// import AppSwiper from '../../appSwiper';
// import SolutionPageCaseStudy from "../../solutionPageComponents/SolutionPageCaseStudy/SolutionPageCaseStudy";

// import DownloadCaseStudy from '../../Modal/CaseStudyButton';
// import DataBaseCloud from "../../../images/platform/PascalIntelligence/IngestData.png"
// import DatabaseLaptop from "../../../images/platform/PascalIntelligence/LargeData.png"
// import Database from "../../../images/platform/PascalIntelligence/GroupDataInRealTime.png"
// import "./Features.css";
import styles from "./index.module.css";
import Image from "next/image";

const Features = ({ featureData }) => {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.featureBoxHeadingplt}>
        <h1>Features</h1>
      </div>

      <div className={styles.cardsContainer}>
        {featureData.map((feature, idx) => (
          <div className={styles.cardWrapper} key={idx}>
            <div className={styles.cardImgContainer}>
              {/* <img src={feature.imageUrl} alt="DataBaseCloudimage" /> */}
              <Image
                src={feature.imageUrl}
                alt="DataBaseCloudimage"
                width={300}
                height={300}
              />
            </div>
            <div className={styles.cardDetailContainer}>
              <h1>{feature.heading}</h1>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
