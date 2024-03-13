import st from "./index.module.css";
import Link from "next/link";
import NewsLetter from "../../molecules/newsletter";

const Blogmain = () => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <span id={st.mainhead}>
          Life @ <span style={{ color: "#AD00A2" }}>Gaian</span>
        </span>
        <div className={st.maincont}>
          <div className={st.fdiv}>
            <div className={st.leftdiv}>
              <Link href={"/comingsoon"} id={st.link}>
                <div className={st.blogtitle}>
                  <span>Beyond the Code : </span>
                  <span>Emphasizing the Human Aspect in AI Development..</span>
                </div>
              </Link>
            </div>
            <div className={st.rightdiv}>
              <Link href={"/comingsoon"} id={st.link}>
                <div className={st.blogtitle}>
                  <span>Future-Proof Your Organization : </span>
                  <span>
                    Cultivating a Culture of Learning and Innovation in the Age
                    of AI
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className={st.sdiv}>
            <div className={st.ldiv}>
              <div className={st.ldivfdiv}>
                <Link href={"/comingsoon"} id={st.link}>
                  <div className={st.blogtitle}>
                    <span>Building a More Inclusive Digital World : </span>
                    <span>The Role of Universal Design</span>
                  </div>
                </Link>
              </div>
              <div className={st.ldivsdiv}>
                <Link href={"/comingsoon"} id={st.link}>
                  <div className={st.blogtitle}>
                    <span>Behind the Scenes at Mobius</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className={st.rdiv}>
              <Link href={"/comingsoon"} id={st.link}>
                <div className={st.blogtitleb}>
                  <span>
                    How AI Is Revolutionizing the broadcast industry in the USA
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Blogmain;
