import SingleApp2 from ".";

export default {
  title: "components/AppSingleCard",
  component: SingleApp2,
};

export const SingleAppCard = () => (
  <SingleApp2 
                image={"2.png"}
                heading={"Around"}
                content={`A Mobius Intelligent Application that leverages NextGenTV capabilities to provide real-time interactive maps with location-based information, including points of interest, directions, and local events.Around enriches the user experience by offering dynamic and visually appealing map features.`}
                Route={"/solutions/live-maps"} />
);
