import BenefitsComponent from "./index";
import { platformData, productsData } from "../../constants/data";

export default {
  title: "components/BenefitsComponent",
  component: BenefitsComponent,
};

//for platform
export const BenefitsComponent1 = () => (
  <BenefitsComponent benefitsData={platformData[0].benefits} />
);


//for product
export const BenefitsComponent2 = () => (
  <BenefitsComponent benefitsData={productsData[0].benefits}/>
)

export const BenefitsComponent3 = () => (
  <BenefitsComponent benefitsData={productsData[1].benefits}/>
)
