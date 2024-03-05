import HeroImageNQuickJump from ".";
import { productsData } from "../../constants/data";

export default {
    title: "Components/HeroImageNQuickJump",
    component: HeroImageNQuickJump,
}

export const ZoomBot = () => (
    <HeroImageNQuickJump data={productsData[0].banner} />
)