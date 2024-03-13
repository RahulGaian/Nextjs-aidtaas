import React from "react";
import { marketplaceData } from "../../constants/data";
import MarketPlaceBanner from "../../molecules/marketplaceBanner";
import Features from "../../molecules/features";
import AppSwiper from "../../molecules/appSwiper";
import MarketPlaceDesc from "../../molecules/marketplaceDesc";

const MarketPlacePage = ({ data }) => {
  return (
    <div>
      <section>
        <MarketPlaceBanner bannerData={data.banner} />
      </section>

      <section>
        <Features
          // featureData={marketplaceData[0].marketPlaceDescription.details}
          featureData={data.marketPlaceDescription.details}
        />
      </section>

      <section>
        {/* <MarketPlaceDesc appDescription={marketplaceData[0].description} /> */}
        <MarketPlaceDesc appDescription={data.description} />
      </section>

      <section>
        <AppSwiper />
      </section>
    </div>
  );
};

export default MarketPlacePage;
