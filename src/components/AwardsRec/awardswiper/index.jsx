import "swiper/css";
// import "./index.css"
import St from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
// import images from "../../../constants/images";
import SwiperCore, { Autoplay } from "swiper";
import { useRef, useEffect, useState } from "react";
import Img from "../../Image";

const Awardswiper = () => {
  SwiperCore.use([Autoplay]);
  const [slidesperview, setslidesperview] = useState("3");
  const [actvindex1, setactiveindex1] = useState(3);
  const [actvindex2, setactiveindex2] = useState(1);
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    let direction = "ltr";

    const autoplayHandler = () => {
      if (swiperInstance.activeIndex === actvindex1 && direction === "ltr") {
        direction = "rtl";
        swiperInstance.params.autoplay.reverseDirection = true;
        swiperInstance.autoplay.stop();
        swiperInstance.autoplay.start();
      } else if (
        swiperInstance.activeIndex === actvindex2 &&
        direction === "rtl"
      ) {
        direction = "ltr";
        swiperInstance.params.autoplay.reverseDirection = false;
        swiperInstance.autoplay.stop();
        swiperInstance.autoplay.start();
      }
    };
    const handleResize = () => {
      if (window.matchMedia("(max-width: 1100px)").matches) {
        setslidesperview("1");
        setactiveindex1(4);
        setactiveindex2(0);
      } else {
        setslidesperview("3");
      }
    };

    handleResize();

    swiperInstance.on("autoplay", autoplayHandler);
    window.addEventListener("resize", handleResize);
    return () => {
      swiperInstance.off("autoplay", autoplayHandler);
      window.removeEventListener("resize", handleResize);
    };
  }, [actvindex1, actvindex2]);
  return (
    <>
      <Swiper
        ref={swiperRef}
        effect={""}
        centeredSlides={true}
        initialSlide={1}
        grabCursor={true}
        slidesPerView={slidesperview}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
          direction: "ltr",
        }}
        // pagination={{
        //     clickable: true,
        // }}

        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        modules={[EffectCoverflow]}
      >
        <SwiperSlide style={{ width: "33.33% !important" }}>
          <div className={St.awardsswipercard}>
            <div className={St.imagecont}>
              <Img src={"/images/overview/Awardsimg1.png"} />
            </div>
            <div className={St.awardtitle}>Product of the Year -NAB Show</div>
            <div className={St.awardyear}>2023</div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "33.33% !important" }}>
          <div className={St.awardsswipercard}>
            <div className={St.imagecont}>
              <Img src={"/images/overview/Awardsimg2.png"} />
            </div>
            <div className={St.awardtitle}>
              National Marketplace platform for the broadcasters in USA
            </div>
            <div className={St.awardyear}>2019</div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "33.33% !important" }}>
          <div className={St.awardsswipercard}>
            <div className={St.imagecont}>
              <Img src={"/images/overview/Awardsimg3.png"} />
            </div>
            <div className={St.awardtitle}>
              Certified as CMMI Level 3 Company
            </div>
            <div className={St.awardyear}></div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "33.33% !important" }}>
          <div className={St.awardsswipercard}>
            <div className={St.imagecont}>
              <Img src={"/images/overview/Awardsimg1.png"} />
            </div>
            <div className={St.awardtitle}>Product of the Year -NAB Show</div>
            <div className={St.awardyear}>2022</div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "33.33% !important" }}>
          <div className={St.awardsswipercard}>
            <div className={St.imagecont}>
              <Img src={"/images/overview/Awardsimg2.png"} />
            </div>
            <div className={St.awardtitle}>
              National Marketplace platform for the broadcasters in USA
            </div>
            <div className={St.awardyear}>2019</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Awardswiper;
