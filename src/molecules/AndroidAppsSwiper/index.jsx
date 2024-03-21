import "swiper/css";
// import SingleApp from "../AppPowered";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import Image from "next/image";
import style from "./index.module.css";
import SwiperCore, { Autoplay } from "swiper";
import { useRef, useEffect, useState } from "react";

let AndroidApps = () => {
  SwiperCore.use([Autoplay]);
  const [slidesPerView, setSlidesPerView] = useState(6);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 980) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(6);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.appswipermainlandingpage}>
      <Swiper
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 0.5,
          disableOnInteraction:true
        }}
        initialSlide={3}
        slidesPerView={slidesPerView}
        freeMode={true}
        speed={3000}
        modules={[Autoplay]}
        // centeredSlides={false}
        // // loop={true}
        // grabCursor={true}
        // autoplay={{
        //   delay: 2000,
        // }}
        // initialSlide={3}
        // slidesPerView={slidesPerView}
        // freeMode={true}
        // modules={[EffectCoverflow]}
        className="swipermenu"
      >
        <SwiperSlide className={style.content1}>
          <Image fill src="/images/apps/13.png" alt="" priority></Image>
        </SwiperSlide>
        <SwiperSlide className={style.content1}>
          <Image fill src="/images/apps/14.png" alt="" priority></Image>
        </SwiperSlide>
        <SwiperSlide className={style.content1}>
          <Image fill src="/images/apps/appstore.png" alt="" priority></Image>
        </SwiperSlide>
        <SwiperSlide className={style.content1}>
          <Image fill src="/images/apps/drive.png" alt="" priority></Image>
        </SwiperSlide>
        <SwiperSlide className={style.content1}>
          <Image fill src="/images/apps/playstore.png" alt="" priority></Image>
        </SwiperSlide>
        <SwiperSlide className={style.content1}>
          <Image fill src="/images/apps/slack.png" alt="" priority></Image>
        </SwiperSlide>
        <SwiperSlide className={style.content1}>
          <Image fill src="/images/apps/zoom.png" alt="" priority></Image>
        </SwiperSlide>
        <SwiperSlide className={style.content1}>
          <Image fill src="/images/apps/twillonew.png" alt="" priority></Image>
        </SwiperSlide>
        {/* <SwiperSlide className={style.content1}>
                <Image fill src="/images/apps/Alpaco.svg" ></Image>
            </SwiperSlide> */}
        {/* <SwiperSlide className={style.content1}>
          <Image fill src="/images/apps/13.png" alt="" priority></Image>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default AndroidApps;
