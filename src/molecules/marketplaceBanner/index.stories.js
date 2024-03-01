import MarketPlaceBanner from ".";
import { marketplaceData } from "../../constants/data";

export default {
    title: "Components/MarketPlaceBanner",
    component: MarketPlaceBanner,
}

export const weatherInsuredMarketPlaceBanner = () => (
    <MarketPlaceBanner bannerData={marketplaceData[0].banner} />
)