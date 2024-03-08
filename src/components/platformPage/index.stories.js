import PlatformPage from "./index";
import { platformData } from "../../constants/data";
export default {
  title: "templates/PlatformPage",
  component: PlatformPage,
};

export const PlatformPageComponent = () => (
  <PlatformPage data={platformData[0]} />
);
