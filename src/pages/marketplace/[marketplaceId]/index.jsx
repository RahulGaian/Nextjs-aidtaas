import MarketPlacePage from "@/components/marketPlacePage";
import { marketplaceData } from "@/constants/data";

function MarketPlace(props) {
  return <MarketPlacePage data={props.data}></MarketPlacePage>;
}

export async function getStaticPaths(context) {
  let mappedData = [];
  for (let marketData of marketplaceData) {
    mappedData.push({
      params: { marketplaceId: marketData.id },
    });
  }
  return {
    paths: mappedData,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  let id = params.marketplaceId;
  for (let marketData of marketplaceData) {
    if (marketData.id === id) {
      console.log(marketData.id);
      return {
        props: {
          data: marketData,
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

export default MarketPlace;
