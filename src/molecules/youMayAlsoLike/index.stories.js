import YouMayAlsoLike from ".";
import { solutionData } from "../../constants/data";

export default {
    title: "Components/YouMayAlsoLike",
    component: YouMayAlsoLike,
};

export const youMayAlsoLike1 = () => (
    <YouMayAlsoLike likeData={solutionData[0].youMayAlsoLike || []}/> // Ensure a fallback value in case solutionData[0].youMayAlsoLike is undefined
)
