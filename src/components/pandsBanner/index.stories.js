import PandSBanner from ".";
import {solutionData, productsData} from "../../constants/data";

export default {
    title: "Components/ProductandSolutionBanner",
    component: PandSBanner
}

export const Default = () => <PandSBanner bannerData={solutionData[0].banner} />;