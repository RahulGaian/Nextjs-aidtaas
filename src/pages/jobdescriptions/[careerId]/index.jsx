import { Jobopeningsdata as Jobopeningsdata } from "@/components/career-openings/jobopenings_dataHr/index";
import Jobdescriptions from "@/components/career-openings/jobdescriptionspage";
function JobOpenings(props) {
  return (
      <Jobdescriptions data={props.data}></Jobdescriptions>
  );
}

export async function getStaticPaths(context) {
  let mappedData = [];
  for (let jobsData of Jobopeningsdata) {
    // console.log(jobsData.url, "from get static path");
    mappedData.push({
      params: { careerId: jobsData.url },
    });
  }
  console.log(mappedData);
  return {
    paths: mappedData,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  // console.log(params);
  let url = params.careerId;
  console.log(url, "from static props");
  for (let jobsData of Jobopeningsdata) {
    // console.log(jobsData);
    if (jobsData.url === url) {
      // console.log(jobsData.url);
      return {
        props: {
          data: jobsData,
        },
      };
    }
  }

  // console.log(id, "hello there");
  //   return {
  //     props: {
  //       data: "hello",
  //     },
  //   };
}

export default JobOpenings;
