import React from "react";
import ProductBanner from "../../molecules/ProductBanner";
// import { productsData } from "../../constants/data";
import HeroImageNQuickJump from "../../molecules/heroImage&QuickJumpProducts";
import Features from "../../molecules/features";
import BenefitsComponent2 from "../../molecules/benefits/index";
import AppSwiper from "../../molecules/appSwiper";
import ContactUs from "../../molecules/contactUs";
import { contactUsData } from "../../molecules/contactUs/data";
import st from "./index.module.css";
import Image from "next/image";

const ProductPage = ({ data }) => {
  return (
    <div
      className={styles.container}
      style={{
        // background:
        //   "linear-gradient(90deg, #bfeeff 0%, #ffe6f7 56.93%, #ffe6e6 80%)",
        background: "linear-gradient(109deg, #d2f3ff 0%, #ffe3e3 100%)",
      }}
    >
      <section>
        <ProductBanner bannerData={data.banner} />
      </section>

      <div className={styles.bg_blue_color_1}>
        <section>
          <HeroImageNQuickJump data={data.banner} />
        </section>

        <div className={styles.bg_pink_blob_1}>
          <div className={styles.bg_blue_color_2}>
            <section>
              <Features featureData={data.features} />
            </section>

            <section>
              <BenefitsComponent2 benefitsData={data.benefits} />
            </section>

            <section>
              <AppSwiper />
            </section>

            <section>
              <ContactUs data={contactUsData.contact3} />
            </section>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductPage;
