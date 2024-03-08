import PlatformPage from "@/components/platformPage";
import { platformData } from "@/constants/data";

function Platform(props) {
  return <PlatformPage data={props.data}></PlatformPage>;
}

export async function getStaticPaths(context) {
  let mappedData = [];
  for (let platData of platformData) {
    mappedData.push({
      params: { platformId: platData.id },
    });
  }
  return {
    paths: mappedData,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  let id = params.platformId;
  for (let platData of platformData) {
    if (platData.id === id) {
      console.log(platData.id);
      return {
        props: {
          data: platData,
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

export default Platform;
