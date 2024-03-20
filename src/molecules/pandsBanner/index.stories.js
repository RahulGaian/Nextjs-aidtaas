import ProductandSolutionBanner from ".";
import { solutionData, productsData } from "../../constants/data";

export default {
  title: "Components/ProductandSolutionBanner",
  component: ProductandSolutionBanner,
};

export const SolutionSmartCity = () => (
  <ProductandSolutionBanner bannerData={solutionData[0].banner} />
);

// export const ProductZoombot = () => (
//   <ProductandSolutionBanner bannerData={productsData[0].banner}/>
// );