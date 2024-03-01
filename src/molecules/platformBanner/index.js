import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const PlatformBanner = ({ id, bannerData, classname }) => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bg_subheading}>
        <div className={styles.design}></div>
     

        <div id={styles.bg_heading} className={styles.bannerContentContainer}>
          <h1>{bannerData.heading}</h1>

          <div className={styles.bannerContentWrapper}>
            <div className={styles.bannerContent}>
              {/* <div className='bg_subheading'>shfkasklf;ja</div> */}
              <h1>{bannerData.subheading}</h1>
              <p>{bannerData.description}</p>
              <div className={styles.bannerContentBtn}>
                <button
                  id={styles.getStartedBtn}
                  onClick={() => {
                    window.open(
                      "https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7"
                    );
                  }}
                >
                  Book a Demo
                </button>
                <button
                  id={styles.learnMoreBtn}
                  style={{ visibility: "hidden" }}
                  onClick={() => {
                    window.location.href = "/NextGenTV_Webinar";
                  }}
                >
                  Register For Webinar <span>&#8594;</span>
                </button>
              </div>
            </div>
            <div className={classname ? classname : "bannerContentImage"}>
              <Image
                src={bannerData.imageUrl}
                alt="Banner Img"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformBanner;
