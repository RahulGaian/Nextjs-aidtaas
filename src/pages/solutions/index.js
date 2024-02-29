import PandSBanner from "@/components/pandsBanner";
import {solutionData, productsData} from "../../constants/data";

const Solution = () => {
    return(
        <div>
            <PandSBanner bannerData={solutionData[0].banner}/>
        </div>
    );
}

export default Solution;