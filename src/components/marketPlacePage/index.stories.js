import MarketPlacePage from "./index";
import { marketplaceData } from "../../constants/data";


export default {
  title: "templates/MarketPlacePage",
  component: MarketPlacePage,
};

//MarketPlacePage template
export const MarketPlaceTemplate = () => (
  <MarketPlacePage data={marketplaceData[0]} />
);
