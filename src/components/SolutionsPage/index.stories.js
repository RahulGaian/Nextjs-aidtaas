import SolutionsTemplate from "."
import { solutionData } from "../../constants/data"
export default {
    title: "components/SolutionsTemplate",
    component: SolutionsTemplate
}

export const Solutions = () => <SolutionsTemplate data={solutionData[0]}/>