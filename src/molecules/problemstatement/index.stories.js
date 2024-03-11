import SolutionPagePS from ".";
import { solutionData } from "../../constants/data";

export default {
    title: "Components/SolutionProblemStatement",
    component: SolutionPagePS,
}

export const SolutionPSSmartCity = () => (
    <SolutionPagePS problemData={solutionData[0].problemStatement} />
)