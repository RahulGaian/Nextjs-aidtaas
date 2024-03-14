import "swiper/css";
// import SingleApp from "../AppPowered";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import {default as Img } from "next/image"
import style from "./index.module.css"
import SwiperCore, { Autoplay } from "swiper";
import { useRef, useEffect, useState } from "react";

let CustomerPartners = () => {

  SwiperCore.use([Autoplay]);
  const swiperRef2 = useRef(null);
  useEffect(() => {
    const swiperInstance2 = swiperRef2.current.swiper;

    let direction = 'ltr';

    const autoplayHandler = () => {
      if (swiperInstance2.isEnd && direction === 'ltr') {
        direction = 'rtl';
        swiperInstance2.params.autoplay.reverseDirection = true;
        swiperInstance2.autoplay.stop();
        swiperInstance2.autoplay.start();
      } else if (swiperInstance2.isBeginning && direction === 'rtl') {
        direction = 'ltr';
        swiperInstance2.params.autoplay.reverseDirection = false;
        swiperInstance2.autoplay.stop();
        swiperInstance2.autoplay.start();
      }
    };

    swiperInstance2.on('autoplay', autoplayHandler);

    return () => {
      swiperInstance2.off('autoplay', autoplayHandler);
    };
  }, []);
  const [slidesPerView, setSlidesPerView] = useState(6);
  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth<480){
            setSlidesPerView(3);
          }
        else if (window.innerWidth < 980) {
            setSlidesPerView(4);
        } 
        else {
        setSlidesPerView(6);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <div className={style.appswipermainlandingpage2}>
      <Swiper
        ref={swiperRef2}
        centeredSlides={false}
        // loop={true}
        grabCursor={true}
        autoplay={{
          delay: 2000,
        }}
        initialSlide={3}
        slidesPerView={slidesPerView}
        freeMode={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
          direction: "ltr",
        }}
        modules={[EffectCoverflow]}
        className="swipermenu2"
      >
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
            <Img priority fill className={style.customerPartnersI} unoptimized src={"/images/landingmainpagenew/cr6.png"} style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} unoptimized src={"/images/landingmainpagenew/cr7.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} unoptimized src={"/images/landingmainpagenew/cr8.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} unoptimized src={"/images/landingmainpagenew/cr9.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} unoptimized src={"/images/landingmainpagenew/cr1.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} unoptimized src={"/images/landingmainpagenew/cr2.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} unoptimized src={"/images/landingmainpagenew/cr3.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} unoptimized src={"/images/landingmainpagenew/cr4.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} unoptimized src={"/images/landingmainpagenew/cr5.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} unoptimized src={"/images/landingmainpagenew/cr6.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} unoptimized src={"/images/landingmainpagenew/cr7.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} unoptimized src={"/images/landingmainpagenew/cr8.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} unoptimized src={"/images/landingmainpagenew/cr9.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomerPartners;
