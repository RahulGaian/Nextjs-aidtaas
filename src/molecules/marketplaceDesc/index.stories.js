import MarketPlaceDesc from ".";
import { marketplaceData } from "../../constants/data";

export default {
    title:"Components/MarketplaceDesc",
    component:MarketPlaceDesc
}

// export const Primary = () => <MarketPlaceDesc appDescription={"Singapore Smart Nation Marketplace is a collaborative platform that addresses the challenges of digital transformation and fosters innovation in Singapore's smart nation journey. It provides a comprehensive ecosystem of digital solutions, promotes collaboration between stakeholders, and accelerates the development and adoption of cutting-edge technologies, ultimately driving the nation's vision of becoming a smart and connected nation."}></MarketPlaceDesc>
export const marketPlaceDesc1 = () => <MarketPlaceDesc appDescription={marketplaceData[0].description}/>