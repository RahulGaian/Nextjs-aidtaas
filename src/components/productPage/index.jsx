import React from "react";
// import ProductandSolutionBanner from "../../molecules/ProductandSolutionBanner/index";
import ProductsNSolutionBanner from "../../molecules/pandsBanner";
// import { productsData } from "../../constants/data";
import HeroImageNQuickJump from "../../molecules/heroImage&QuickJumpProducts";
import Features from "../../molecules/features";
// import BenefitsComponent2 from "../../molecules/benefits/index.stories";
import BenefitsComponent2 from "../../molecules/benefits/index";
import AppSwiper from "../../molecules/appSwiper";
import ContactUs from "../../molecules/contactUs";
import { contactUsData } from "../../molecules/contactUs/data";
import st from "./index.module.css";
import Image from "next/image";

const ProductPage = ({ data }) => {
  return (
    <div>
      <section>
        <ProductsNSolutionBanner bannerData={data.banner} />
      </section>

      <section>
        <div className={st.container}>
          <div className={st.contentContainer}>
            <Image
              src={data.banner.viewDemoUrl}
              alt="Banner"
              width={400}
              height={400}
              priority
            ></Image>
            <div className={st.mainCont}>
              <span className={st.global_paragraph}>
                <a href="#feat">Features</a>
              </span>
              <span className={st.global_paragraph}>
                <a href="#ben">Benefits</a>
              </span>
              <span className={st.global_paragraph}>
                <a href="#desc">Case Study</a>
              </span>
              <span className={st.global_paragraph}>
                <a href="#products">Related Products</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="feat">
        <Features featureData={data.features} />
      </section>

      <section id="ben">
        <BenefitsComponent2 benefitsData={data.benefits} />
      </section>

      <section id="desc">
        <AppSwiper />
      </section>

      <section id="products">
        <ContactUs data={contactUsData.contact3} />
      </section>
    </div>
  );
};

export default ProductPage;
