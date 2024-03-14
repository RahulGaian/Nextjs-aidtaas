import PlatformPage from "@/components/platformPage";
import Layout from "@/pages/Layout";
import { platformData } from "@/constants/data";

function Platform(props) {
  return (
    <Layout>
      <PlatformPage data={props.data}></PlatformPage>;
    </Layout>
  );
}

export async function getStaticPaths(context) {
  let mappedData = [];
  for (let platData of platformData) {
    console.log(platData.id, "from get static path");
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
  // console.log(params);
  let id = params.platformId;
  // console.log(id);
  for (let platData of platformData) {
    // console.log(platData);
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
