import SolutionsTemplate from "."
import { solutionData } from "../../constants/data"
export default {
    title: "templates/SolutionsTemplate",
    component: SolutionsTemplate
}

export const Solutions = () => <SolutionsTemplate data={solutionData[0]}/>