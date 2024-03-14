import "swiper/css";
// import SingleApp from "../AppPowered";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow} from "swiper";
import Image from "next/image";
import style from "./index.module.css";
import SwiperCore, { Autoplay } from 'swiper';
import { useRef,useEffect,useState} from "react";

let AndroidApps = () => {

    SwiperCore.use([Autoplay])
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
        
    return(




         <div className={style.appswipermainlandingpage}>
                <Swiper 
        ref={swiperRef2}
        centeredSlides={false}
        // loop={true}
        grabCursor={true}
        autoplay=
        {{
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
            direction: 'ltr',
          }}
        modules={[EffectCoverflow]}
        className="swipermenu"
        >
            {/* <SwiperSlide className={style.content1}>
                <Image src="/images/apps/Alpaco.svg" ></Image>
            </SwiperSlide> */}
            <SwiperSlide className={style.content1}>
                <Image fill src="/images/apps/13.png" alt="" priority unoptimized ></Image>
            </SwiperSlide>
            <SwiperSlide className={style.content1}>
                <Image fill src="/images/apps/14.png" alt="" priority unoptimized></Image>
            </SwiperSlide>
            <SwiperSlide className={style.content1}>
                <Image fill src="/images/apps/appstore.png" alt="" priority unoptimized></Image>
            </SwiperSlide>
            <SwiperSlide className={style.content1}>
                <Image fill src="/images/apps/drive.png" alt="" priority unoptimized></Image>
            </SwiperSlide>
            <SwiperSlide className={style.content1}>
                <Image fill src="/images/apps/playstore.png" alt="" priority unoptimized></Image>
            </SwiperSlide>
            <SwiperSlide className={style.content1}>
                <Image fill src="/images/apps/slack.png" alt="" priority unoptimized></Image>
            </SwiperSlide>
            <SwiperSlide className={style.content1}>
                <Image  fill src="/images/apps/zoom.png" alt="" priority unoptimized></Image>
            </SwiperSlide>
            <SwiperSlide className={style.content1}>
                <Image fill src="/images/apps/twillonew.png" alt="" priority unoptimized></Image>
            </SwiperSlide>
            {/* <SwiperSlide className={style.content1}>
                <Image src="/images/apps/Alpaco.svg" ></Image>
            </SwiperSlide> */}
            <SwiperSlide className={style.content1}>
                <Image fill src="/images/apps/13.png" alt="" priority unoptimized></Image>
            </SwiperSlide>
           
        </Swiper>
         </div>
        
    )
}

export default AndroidApps;