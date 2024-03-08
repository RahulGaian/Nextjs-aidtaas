import ProductsNSolutionBanner from "../../molecules/pandsBanner";
import QuickJump from "../../molecules/quickJumpSolution";
import SolutionPageCapabilities from "../../molecules/capabilities";
import AppSwiper from "../../molecules/appSwiper";
import YouMayAlsoLike from "../../molecules/youMayAlsoLike";
import SpeakExpert from "../../molecules/speakExpert";

const SolutionsTemplate = ({data}) => {
  return (
    <div>
      <section>
        <ProductsNSolutionBanner bannerData={data.banner} />
      </section>
      <section>
        <QuickJump />
      </section>
      <section>
        <SolutionPageCapabilities data={data.capabilities} />
      </section>
      <section><AppSwiper/></section>
      <section>
        <YouMayAlsoLike likeData={data.youMayAlsoLike} />
      </section>
      <section>
        <SpeakExpert />
      </section>
    </div>
  );
};

export default SolutionsTemplate;