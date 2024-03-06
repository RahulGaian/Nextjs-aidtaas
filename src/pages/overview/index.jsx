import Style from "./index.module.css";
import Img from "../../components/Image";
// import Years from "../../components/YearsComponent"
import Values from "../../components/OurValues";
// import LeaderShip from "../../components/LeaderShip"
import Awards from "../../components/AwardsRec/index";
import ProductExp from "../../components/ProductEndExplaner";
import BuildWord from "../../components/BuildWorld";
import Foudersmessage from "../../components/Founderscomponent";
import Lifeblog from "../careers/lifeblogpage";
import Image from "next/image";
let Overview = () => {
  return (
    <section className={Style.bg}>
      <div className={Style.pink_blob_1}>
        <div className={Style.pink_blob_2}>
          <section className={Style.bgmain}>
            <div className={Style.blue_blob}>
              {/* <Img src={"/images/overview/2.png"} className={Style.imagefolder} style={{position:"absolute",right:0,zIndex:0}}></Img> */}
              <div className={Style.contentsmain}>
                <Image
                  src={"./images/overview/2.png"}
                  className={Style.imagefolder}
                  fill
                ></Image>
                {/* <Img
                  src={"./images/overview/2.png"}
                  className={Style.imagefolder}
                ></Img> */}
                <div>
                  <div>
                    {" "}
                    <h1 className={Style.heading}>
                      The only problems worth solving are the really big ones !
                    </h1>
                  </div>
                  <div>
                    <h2 className={Style.content}>
                      {" "}
                      Mobius DTaaS is a leading deep tech company at the
                      vanguard of digital transformation, specializing in NoCode
                      solutions that empower businesses and organizations to
                      tackle the world's most formidable challenges. Our mission
                      is to democratize technology, enabling anyone to harness
                      the full potential of digital innovation, regardless of
                      their technical background.
                    </h2>
                  </div>

                  {/* <Years></Years> */}
                  <div className={Style.yearscontainer}>
                    <div className="upper_container">
                      <div className={Style.yearsfoldermain}>
                        <div>18</div>
                        <div>
                          Glorious years <br />
                          and Counting
                        </div>
                      </div>

                      <div className={Style.yearsfoldermain}>
                        <div>300 +</div>
                        <div>
                          Talented <br />
                          Minds
                        </div>
                      </div>
                    </div>

                    <div className="lower_container">
                      <div className={Style.yearsfoldermain}>
                        <div>24</div>
                        <div>
                          Patents <br />
                          in Process
                        </div>
                      </div>

                      <div className={Style.yearsfoldermain}>
                        <div>6 +</div>
                        <div>
                          years of Average
                          <br /> Customer Loyalty
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            style={{ position: "relative" }}
            className={Style.bottomsection}
          >
            <Values></Values>

            <Awards></Awards>

            <Foudersmessage></Foudersmessage>
            <BuildWord></BuildWord>
            <div className={Style.lifeblogcomponent}>
              <Lifeblog></Lifeblog>
            </div>
          </section>
          <ProductExp
            heading={"Your Trusted Digital Transformation Partner"}
            content={
              "Get in touch with our expert team to understand how Mobius Platform can accelerate your digital transformation journey"
            }
            btn={"Contact Us"}
            url={"/contact"}
          ></ProductExp>
        </div>
      </div>
    </section>
  );
};
export default Overview;
