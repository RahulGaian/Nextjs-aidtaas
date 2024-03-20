import ProductBanner from ".";
import { productsData } from "../../constants/data";

export default {
  title: "Components/ProductBanner",
  component: ProductBanner,
};


export const ProductZoombot = () => (
  <ProductBanner bannerData={productsData[0].banner}/>
);