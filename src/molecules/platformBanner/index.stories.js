import PlatformBanner from ".";
import { platformData} from "../../constants/data";

export default {
  title: "Components/PlatformBanner",
  component: PlatformBanner,
};

export const Default = () => (
  <PlatformBanner bannerData={platformData[0].banner} />
);

