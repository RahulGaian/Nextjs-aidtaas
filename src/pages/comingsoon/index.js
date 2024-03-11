import LottieAnimation from "../../components/LottieAnimations";
import st from "./index.module.css";
import data from "../../animations/coming_soon.json";

const ComingSoon = () => {
  return (
    <div className={st.comingSoonContainer}>
      <div className={st.comingSoonWrapper}>
        <div className={st.comingSoonLeftWrapper}>
          <div className={st.comingSoonHeading}>
            <h2>Coming Soon!</h2>
          </div>
          <div className={st.comingSoonSubHeading}>
            <h4>Something Awesome is Being Brewed here...</h4>
          </div>
          <div className={st.comingSoonDescription}>
            <p>
              Our team of brilliant minds are working tirelessly to bring you
              the most innovative and exciting Mobius experience. Stay tuned for
              a truly game-changing experience that will leave you speechless.
              The future is coming, and it's in our hands.
            </p>
          </div>
        </div>
        <div className={st.comingSoonRigthWrapper}>
          <LottieAnimation data={data}></LottieAnimation>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
