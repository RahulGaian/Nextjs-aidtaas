import ProductPage from "./index";
import { productsData } from "../../constants/data";

export default {
  title: "templates/ProductPage",
  component: ProductPage,
};

// ProductPage template
export const ProductTemplate = () => <ProductPage data={productsData[0]} />;
