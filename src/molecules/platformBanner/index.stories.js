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

export const monet = () => (
  <PlatformBanner bannerData={platformData[2].banner}/>
);

export const vinci = () => (
  <PlatformBanner bannerData={platformData[3].banner}/>
)

export const holacracy = () => (
  <PlatformBanner bannerData={platformData[4].banner}/>
)

