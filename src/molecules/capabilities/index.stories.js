import SolutionPageCapabilities from "./index";
import { solutionData } from "../../constants/data";

export default {
  title: "components/SolutionPageCapabilities",
  component: SolutionPageCapabilities,
};

//SOLUTIONS PAGE
export const CapabilitiesComponent = () => (
  <SolutionPageCapabilities data={solutionData[0].capabilities} />
);
export const CapabilitiesComponent1 = () => (
  <SolutionPageCapabilities data={solutionData[1].capabilities} />
);
