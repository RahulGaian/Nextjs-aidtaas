import React from "react";
import Image from "next/image";

import st from "./index.module.css";
import Values from "../../components/OurValues";
import Awesome from "../../components/AwesomeTeam";
import Button from "../../components/buttons";
const Vision = () => {
  const ChangeRoute = (Route) => {
    window.location.href = Route;
  };

  return (
    <section className={st.Vision_section}>
      <div className={st.bg_blue_vision_banner}>
        <div className={st.bg_blue_color_1}>
          <div className={"mt-24 " + st.main}>
            <Image
              // src={"images/vision/1.png"}
              src={"/images/vision/vision_banner.png"}
              style={{
                width: "100%",
                display: "flex",
                margin: "0 auto",
                borderRadius: "30px",
              }}
              className={st.firstImg}
              width={500}
              height={500}
            ></Image>
            <Image
              src={"/images/vision/2.png"}
              style={{
                width: "100%",
                display: "flex",
                margin: "0 auto",
                borderRadius: "30px",
              }}
              className={st.img2}
              width={500}
              height={500}
            ></Image>

            <h1 className={st.text1}>Our Mission, Vision and Values</h1>
          </div>

          <div className={st.secondHeading}>
            <div className={st.heading}>
              <h1 className={st.about}>About</h1>
              <h1 className={st.mobius}>Mobius</h1>
            </div>
            <Image
              src={"/images/vision/4.png"}
              className={st.img4}
              width={400}
              height={300}
            ></Image>
            {/* <Img src={"images/vision/3.png"} className={st.img3}></Img> */}

            <div className={st.company_wrapper}>
              <h1 className={st.prof}>Company profile</h1>
              <p className={st.content2}>
                Mobius DTaaS is at the forefront of the phygital transformation
                revolution, empowering businesses to achieve true convergence
                between the digital and physical worlds. Mobius DTaaS provides a
                suite of advanced digital transformation tools and expertise in
                physical integration, enabling businesses to unlock new
                possibilities and drive economic disruption through XaaS
                phygital transformation. Our platform's low-code philosophy
                allow businesses to achieve digital transformation at lightning
                speed, enabling them to operate with agility and speed in
                today's fast-paced world.
              </p>
            </div>
          </div>

          <div>
            <div className={st.bg_pink_color_1}>
              <div className={st.bg_pink_2}>
                <div className={st.bg_blue_2}>
                  <div className={st.mission}>
                    <div className={st.missonImage}>
                      {" "}
                      <Image
                        src={"/images/vision/6.png"}
                        width={300}
                        height={300}
                      ></Image>
                    </div>

                    <div className={st.mission_desc}>
                      <h1 className={st.mission_heading}>Our Mission</h1>
                      <p className={st.mission_heading_content}>
                        Building Tomorrow's composable businesses by enabling
                        them with low code AI enabled components.
                      </p>
                    </div>
                  </div>

                  <div className={st.mission1}>
                    <div className={st.missonImage}>
                      <Image
                        src={"/images/vision/5.png"}
                        width={300}
                        height={300}
                      ></Image>
                    </div>
                    <div className={st.mission1_desc}>
                      <h1 className={st.mission_heading}>Our Vision</h1>
                      <p className={st.mission_heading_content}>
                        Started in 2006, with a vision to offer leading-edge,
                        tech savvy solutions to the media & entertainment
                        industry.
                      </p>
                    </div>
                  </div>

                  <div className={" text-center"}>
                    {/* <h1 className={st.mission_heading + " mt-12"}>Our Values</h1> */}

                    <Values style={{ marginTop: "0px" }}></Values>
                  </div>

                  <div className={st.awesome}>
                    <div className={st.awesome1}>
                      <h1 className={st.firsttext}>
                        Join Our Awesome Team of talented
                      </h1>
                      <Awesome></Awesome>
                    </div>

                    <div
                      className="mt-12"
                      onClick={() => {
                        ChangeRoute("careeropenings");
                      }}
                    >
                      {/* <Button text="View Openings" filled={false}></Button> */}
                      <Button text="View Openings"></Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
