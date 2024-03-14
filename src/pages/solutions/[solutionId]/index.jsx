
import SolutionsTemplate from "@/components/SolutionsPage";
import { solutionData } from "@/constants/data";

function Solution(props) {
  return (<SolutionsTemplate data={props.data} />)
}

export async function getStaticPaths(context) {
  let mappedData = [];
  for (let solData of solutionData) {
    console.log(solData.id)
    mappedData.push({
      params: { solutionId: solData.id },
    });

  }
  return {
    paths: mappedData,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  let id = params.solutionId;
  for (let solData of solutionData) {
    if(solData.id === id){
        console.log(solData.id);
        return{
            props: {
                data: solData,
            },
        };
    }
  }
}

export default Solution;