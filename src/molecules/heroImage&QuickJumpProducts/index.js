import st from "./index.module.css";
import Image from "next/image";

const HeroImageNQuickJump = ({ data }) => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <Image
          src={data.viewDemoUrl}
          alt="Banner"
          width={400}
          height={400}
          priority
        ></Image>
        <div className={st.mainCont}>
          <span className={st.global_paragraph}>
            <a href="#feat">Features</a>
          </span>
          <span className={st.global_paragraph}>
            <a href="#ben">Benefits</a>
          </span>
          <span className={st.global_paragraph}>
            <a href="#desc">Case Study</a>
          </span>
          <span className={st.global_paragraph}>
            <a href="#products">Related Products</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroImageNQuickJump;
