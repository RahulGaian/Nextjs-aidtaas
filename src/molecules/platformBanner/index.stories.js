import PlatformBanner from ".";
import { platformData} from "../../constants/data";

export default {
  title: "Components/PlatformBanner",
  component: PlatformBanner,
};

export const pascalIntel = () => (
  <PlatformBanner bannerData={platformData[0].banner} />
);

export const Bob = () => (
  <PlatformBanner bannerData={platformData[1].banner}/>
);