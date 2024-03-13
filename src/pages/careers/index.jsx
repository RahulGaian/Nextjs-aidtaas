"use client";
// import images from '../../constants/images';
// import Awesome from "../../components/AwesomeTeam";
import Awesometeammain from "../../components/AwesomeTeam";

// import DynamicContent from "./joinus";
import ContentSlider from "../../components/careers/joinus";
import EmployeeSlider from "../../components/careers/employees";
import Growthprogram from "../../components/careers/programs";
import Jobopenings from "../../components/careers/jobopenings";
// import Lifeblog from "./lifeblogpage";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { increment } from "firebase/database";
import Img from "../../components/Image";
import styles from "./index.module.css";
import Gem from "../../components/gem";
import Image from "next/image";

// import Slide1img1 from "../images/Career/slider_images/slide1img1.png"
// import Slide1img2 from "../images/Career/slider_images/slide1img2.png"
// import Slide1img3 from "../images/Career/slider_images/slide1img3.png"

// import Slide2img1 from "../images/Career/slider_images/slide2img1.png"
// import Slide2img2 from "../images/Career/slider_images/slide2img2.png"
// import Slide2img3 from "../images/Career/slider_images/slide2img3.png"

// import Slide3img1 from "../images/Career/slider_images/slide3img1.png"
// import Slide3img2 from "../images/Career/slider_images/slide3img2.png"
// import Slide3img3 from "../images/Career/slider_images/slide3img3.png"

let Careers = () => {
  const totalSlides = 3;

  // Custom hook to manage carousel timers
  const useCarouselTimer = (initialDelay, interval) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [increment, setIncrement] = useState(0);
    useEffect(() => {
      let timer;
      const startTimer = () => {
        timer = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + increment) % totalSlides);
        }, interval);
      };

      const delay = setTimeout(() => {
        startTimer();
      }, initialDelay);

      return () => {
        clearTimeout(delay);
        clearInterval(timer);
      };
    }, [initialDelay, interval, increment]);

    useEffect(() => {
      if (activeIndex === totalSlides - 1) {
        setIncrement(-1);
      } else if (activeIndex === 0) {
        setIncrement(1);
      }
    }, [activeIndex]);
    return activeIndex;
  };

  const activeIndex1 = useCarouselTimer(0, 4200);
  const activeIndex2 = useCarouselTimer(0, 4700);
  const activeIndex3 = useCarouselTimer(0, 5300);

  const changeRoute = (Route) => {
    window.location.href = Route;
  };

  return (
    <>
      <div className={styles.Careerpagemain}>
        <Gem />
        <div className={styles.topcomponent}>
          <div className={styles.topcomponentmain}>
            <div className={styles.topcomponent_1}>
              {/* <img src={i/ages.Careerpageimage1} className="topcomponentimage" alt="careerimg1"/> */}
              <Image
                src={"/imagesnew/Career/topcomponentimage1.png"}
                className={styles.topcomponentimage}
                width={500}
                height={500}
              />
            </div>
            <div className={styles.topcomponent_2}>
              <div className={styles.topcomponent_2_head}>
                We're redefining NoCode
              </div>
              <div className={styles.topcomponent_2_desc}>
                With a powerful suite of tools, we're changing how future apps
                are built
              </div>

              {/* <div className="topcomponent_2_button">Find your dream work</div> 
                        </div> */}
              <div
                className={styles.topcomponent_2_button}
                onClick={() => {
                  changeRoute("careeropenings");
                }}
              >
                Find your dream work{" "}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.careerssecond_componentmain}>
          <div className={styles.careersecond_component}>
            <div className={styles.component1}>
              <div>
                {" "}
                <span className={styles.secondcomponent_headtitle}>
                  Do your life's{" "}
                  <span className={styles.color_background}>Best Work</span>{" "}
                  here !
                </span>
              </div>
              <div>
                <p className={styles.secondcomponent_headdesc}>
                  At Gaian we encourage to explore various skills across domains
                  to drive flourishing growth
                </p>
              </div>
            </div>
            <div className={styles.component2}>
              <Carousel
                showThumbs={false}
                showStatus={false}
                selectedItem={activeIndex1}
                interval={null}
                showIndicators={false}
                infiniteLoop={true}
                showArrows={false}
                stopOnHover={false}
              >
                <div className={styles.corouselimgesdiv}>
                  <Image
                    src={"/imagesnew/Career/slider_images/slide1img1.png"}
                    className={styles.corouselimges}
                    width={500}
                    height={500}
                  />
                </div>
                <div className={styles.corouselimgesdiv}>
                  <Image
                    src={"/imagesnew/Career/slider_images/slide1img2.png"}
                    className={styles.corouselimges}
                    width={500}
                    height={500}
                  />
                </div>
                <div className={styles.corouselimgesdiv}>
                  <Image
                    src={"/imagesnew/Career/slider_images/slide1img3.png"}
                    className={styles.corouselimges}
                    width={500}
                    height={500}
                  />
                </div>
              </Carousel>
            </div>
            <div className={styles.component3}>
              <Carousel
                showStatus={false}
                showThumbs={false}
                selectedItem={activeIndex2}
                interval={null}
                showIndicators={false}
                infiniteLoop={true}
                showArrows={false}
                stopOnHover={false}
              >
                <div className={styles.corouselimgesdiv}>
                  <Image
                    src={"/imagesnew/Career/slider_images/slide2img1.png"}
                    className={styles.corouselimges}
                    width={500}
                    height={500}
                  />
                </div>
                <div className={styles.corouselimgesdiv}>
                  <Image
                    src={"/imagesnew/Career/slider_images/slide2img2.png"}
                    className={styles.corouselimges}
                    width={500}
                    height={500}
                  />
                </div>
                <div className={styles.corouselimgesdiv}>
                  <Image
                    src={"/imagesnew/Career/slider_images/slide2img3.png"}
                    className={styles.corouselimges}
                    width={500}
                    height={500}
                  />
                </div>
              </Carousel>
            </div>
            <div className={styles.component4}>
              <Carousel
                showStatus={false}
                showThumbs={false}
                selectedItem={activeIndex3}
                interval={null}
                showIndicators={false}
                infiniteLoop={true}
                showArrows={false}
                stopOnHover={false}
              >
                <div className={styles.corouselimgesdiv}>
                  <Image
                    src={"/imagesnew/Career/slider_images/slide3img1.png"}
                    className={styles.corouselimges}
                    width={500}
                    height={500}
                  />
                </div>
                <div className={styles.corouselimgesdiv}>
                  <Image
                    src={"/imagesnew/Career/slider_images/slide3img2.png"}
                    className={styles.corouselimges}
                    width={500}
                    height={500}
                  />
                </div>
                <div className={styles.corouselimgesdiv}>
                  <Image
                    src={"/imagesnew/Career/slider_images/slide3img3.png"}
                    className={styles.corouselimges}
                    width={500}
                    height={500}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        <div className={styles.benefitsmain}>
          <div className={styles.benefits}>
            <div>
              <h1 className={styles.color_background}>Benefits</h1>
              <p className="">
                Gaian is dedicated to providing its valued Gaianites and their
                loved ones with an exceptional benefits experience, prioritizing
                their physical, financial, and emotional welfare. Our
                user-centric approach, backed by data, ensures thoughtfully
                crafted benefits that promote health and wellbeing, making
                self-care effortless. Together, we unite to build a better
                world, driven by the needs of our employees, customers and their
                families.
              </p>
            </div>
          </div>
          <div className={styles.benefitsgrid}>
            <h1>What we Offer</h1>
            <div className={styles.benContainer}>
              <div id="bc1" className={styles.bencont}>
                <Image
                  // src={r/quire("./images/User Multiple Female Group.png")}
                  src={"/imagesnew/Career/ben1.png"}
                  alt="Benefits Image"
                  width={100}
                  height={100}
                />
                <span>“People First” mindset</span>
              </div>
              <div id="bc2" className={styles.bencont}>
                <Image
                  src={"/imagesnew/Career/ben2.png"}
                  alt="Benefits Image"
                  width={100}
                  height={100}
                />
                <span>Learning for Lifetime</span>
              </div>
              <div id="bc3" className={styles.bencont}>
                <Image
                  src={"/imagesnew/Career/ben3.png"}
                  alt="Benefits Image"
                  width={100}
                  height={100}
                />
                <span>Innovation & Perseverance is our tradecraft</span>
              </div>
              <div id="bc4" className={styles.bencont}>
                <Image
                  src={"/imagesnew/Career/ben4.png"}
                  alt="Benefits Image"
                  width={100}
                  height={100}
                />
                <span>Making winners of our workforce</span>
              </div>
              <div id="bc5" className={styles.bencont}>
                <Image
                  src={"/imagesnew/Career/ben5.png"}
                  alt="Benefits Image"
                  width={100}
                  height={100}
                />
                <span>Value creation for all our stakeholders</span>
              </div>
              <div id="bc6" className={styles.bencont}>
                <Image
                  src={"/imagesnew/Career/ben6.png"}
                  alt="Benefits Image"
                  width={100}
                  height={100}
                />
                <span>Personalized career plan and development</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.maincomponent}>
          <ContentSlider></ContentSlider>
        </div>
        <div>
          <Growthprogram></Growthprogram>
        </div>

        {/* <div className="maincomponent _4pt">
                      
                    <Lifeblog></Lifeblog>
                </div> */}
        <div className={styles.maincomponent + " " + styles._4pt}>
          {/* <Jobopenings></Jobopenings> */}
          <Jobopenings></Jobopenings>
        </div>
        <div className={styles.maincomponent + " " + styles._4pt}>
          <div className={styles.maincomponent2}>
            <div className={styles.employeemainhead}>
              What our Employees say
            </div>
            <div>
              <EmployeeSlider></EmployeeSlider>
            </div>
          </div>
        </div>

        <div className={styles.maincomponent}>
          <div className={styles.awesome2}>
            <div className={styles.awesome1}>
              <div>Join Our Awesome Team of talented</div>
              <Awesometeammain></Awesometeammain>
            </div>
            <div className={styles.Career_buttonsmain + " " + styles._2pt}>
              <div
                className={styles.Career_viewOpening_button2}
                onClick={() => {
                  changeRoute("careeropenings");
                }}
              >
                View openings
              </div>
            </div>
          </div>

          {/*
           */}
        </div>
      </div>
    </>
  );
};

export default Careers;
