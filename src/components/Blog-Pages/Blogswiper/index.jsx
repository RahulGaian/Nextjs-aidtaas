import "swiper/css";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
// import images from "../../../constants/images";
import SwiperCore, { Autoplay } from "swiper";
import { useRef, useEffect, useState } from "react";

let Blogpostswiper = ({ data }) => {
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
      <section className="blogswipermain">
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
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="blogsmain"
        >
          <SwiperSlide style={{ width: "33.33% !important" }}>
            <div className="Blogcard1 img1">
              <div className="Blogcontent1">
                Beyond the Code : Emphasizing the Human Aspect in AI Development
                and Digital Transformation
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide style={{ width: "33.33% !important" }}>
            <div className="Blogcard1 img2">
              <div className="Blogcontent1">
                Future-Proof Your Organization : Cultivating a Culture of
                Learning and Innovation in the Age of AI
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "33.33% !important" }}>
            <div className="Blogcard1 img3">
              <div className="Blogcontent1">
                Building a More Inclusive Digital World : The Role of Universal
                Design
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide style={{ width: "33.33% !important" }}>
            <div className="Blogcard1 img4">
              <div className="Blogcontent1">Behind the Scenes at Mobius</div>
            </div>
          </SwiperSlide>

          <SwiperSlide style={{ width: "33.33% !important" }}>
            <div className="Blogcard1 img5">
              <div className="Blogcontent1">
                How AI Is Revolutionizing the broadcast industry in the USA
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Blogpostswiper;
