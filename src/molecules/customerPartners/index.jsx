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
        setSlidesPerView(8);
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
        className="swipermenu2"
      >
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
            <Img priority fill className={style.customerPartnersI} src={"/images/landingmainpagenew/cr6.png"} style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} src={"/images/landingmainpagenew/cr7.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} src={"/images/landingmainpagenew/cr8.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} src={"/images/landingmainpagenew/cr9.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} src={"/images/landingmainpagenew/cr1.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} src={"/images/landingmainpagenew/cr2.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} src={"/images/landingmainpagenew/cr3.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} src={"/images/landingmainpagenew/cr4.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} src={"/images/landingmainpagenew/cr5.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} src={"/images/landingmainpagenew/cr6.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} src={"/images/landingmainpagenew/cr7.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} src={"/images/landingmainpagenew/cr8.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div style={{position:"relative"}} className={style.customerPartnersI} >
          <Img priority fill className={style.customerPartnersI} src={"/images/landingmainpagenew/cr9.png"}style={{objectFit:'contain'}}></Img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomerPartners;
