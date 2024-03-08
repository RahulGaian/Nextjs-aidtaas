import PlatformBanner from "../../molecules/platformBanner/index";
import { platformData } from "../../constants/data";
import React from "react";
import { BenefitsComponent1 } from "../../molecules/benefits/index.stories";
import Features from "../../molecules/features";
import ContactUs from "../../molecules/contactUs";
import { contactUsData } from "../../molecules/contactUs/data";
import SeeAlso from "../../molecules/seeAlso";

const PlatformPage = ({ data }) => {
  // console.log(data);
  return (
    <section>
      <section>
        <PlatformBanner bannerData={data.banner} />
      </section>
      <section>
        <Features featureData={data.features} />
      </section>
      <section>
        <BenefitsComponent1 benefitsData={data.benefits} />
      </section>
      <section>
        <ContactUs data={contactUsData.contact2} />
      </section>
      <section>
        <SeeAlso seeAlsoData={data.SeeAlso} />
      </section>
    </section>
  );
};

export default PlatformPage;
