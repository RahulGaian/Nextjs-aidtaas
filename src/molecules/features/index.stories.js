import Features from "./index";
import {
  platformData,
  productsData,
  marketplaceData,
} from "../../constants/data";

export default {
  title: "components/Features",
  component: Features,
};

//PLATFORM PAGES
export const FeaturesComponent = () => (
  <Features featureData={platformData[0].features} />
);
export const FeaturesComponent1 = () => (
  <Features featureData={platformData[1].features} />
);
export const FeaturesComponent2 = () => (
  <Features featureData={platformData[2].features} />
);
export const FeaturesComponent3 = () => (
  <Features featureData={platformData[3].features} />
);
export const FeaturesComponent4 = () => (
  <Features featureData={platformData[4].features} />
);

//PRODUCTS PAGES
export const FeaturesComponent5 = () => (
  <Features featureData={productsData[0].features} />
);
export const FeaturesComponent6 = () => (
  <Features featureData={productsData[1].features} />
);

//MARKETPLACES
export const FeaturesComponent7 = () => (
  <Features featureData={marketplaceData[0].marketPlaceDescription.details} />
);
