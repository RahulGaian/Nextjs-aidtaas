import ProductPage from "@/components/productPage";
import { productsData } from "@/constants/data";

function Product(props) {
  return(

    <ProductPage data={props.data}></ProductPage>
  ) 
}

export async function getStaticPaths(context) {
  let mappedData = [];
  for (let prodData of productsData) {
    mappedData.push({
      params: { productId: prodData.id },
    });
  }
  return {
    paths: mappedData,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  let id = params.productId;
  for (let prodData of productsData) {
    if (prodData.id === id) {
      console.log(prodData.id);
      return {
        props: {
          data: prodData,
        },
      };
    }
  }
  console.log(id, "hello there");
  //   return {
  //     props: {
  //       data: "hello",
  //     },
  //   };
}

export default Product;
