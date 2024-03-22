import ProductsNSolutionBanner from "../../molecules/pandsBanner";
import SolutionPagePS from "../../molecules/problemstatement";
import QuickJump from "../../molecules/quickJumpSolution";
import SolutionPageCapabilities from "../../molecules/capabilities";
import AppSwiper from "../../molecules/appSwiper";
import YouMayAlsoLike from "../../molecules/youMayAlsoLike";
import SpeakExpert from "../../molecules/speakExpert";
import st from "./index.module.css";

const SolutionsTemplate = ({ data }) => {
  return (
    <div>
      <section>
        <ProductsNSolutionBanner bannerData={data.banner} />
      </section>
      <section>
        <div className={st.menuContainer}>
          <div className={st.menuContentContainer}>
            <div className={st.content4}>
              <div className={st.content3}>
                <span id={st.firstele}>
                  <a href="#statement">Problem Statement</a>
                </span>
                <span>
                  <a href="#capabilities">Capabilities</a>
                </span>
                <span>
                  <a href="#products">Products</a>
                </span>
                <span>
                  <a href="#alsolike">You may also like</a>
                </span>
                <span id={st.lastele}>
                  <a href="#resources">Resources</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="statement">
        <SolutionPagePS problemData={data.problemStatement} />
      </section>
      <section id="capabilities">
        <SolutionPageCapabilities data={data.capabilities} />
      </section>
      <section id="products">
        <AppSwiper />
      </section>
      <section id="alsolike">
        <YouMayAlsoLike likeData={data.youMayAlsoLike} />
      </section>
      <section id="resources">
        <SpeakExpert />
      </section>
    </div>
  );
};

export default SolutionsTemplate;
