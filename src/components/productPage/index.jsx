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

const ProductPage = ({ data }) => {
  return (
    <div>
      <section>
        <ProductsNSolutionBanner bannerData={data.banner} />
      </section>

      <section>
        <HeroImageNQuickJump data={data.banner} />
      </section>

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
  );
};

export default ProductPage;
