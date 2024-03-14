import { marketplaceData } from "../../constants/data";
import SecondHeading from "./index";

export default {
  title: "components/SecondHeading",
  component: SecondHeading,
};

export const SecondHeadingComp = () => (
  <SecondHeading  data={marketplaceData[0].marketPlaceDescription}/>
);
export const SecondHeadingComp1 = () => (
  <SecondHeading  data={marketplaceData[1].marketPlaceDescription}/>
);
