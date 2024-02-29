import Features from "./index";
import { platformData } from "../../constants/data";

export default {
  title: "components/Features",
  component: Features,
};

export const FeaturesComponent = () => (
  <Features featureData={platformData[0].features} />
);
