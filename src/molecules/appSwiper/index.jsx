"use-client"
import style from  "./index.module.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
// import images from "../../constants/images";
import SwiperCore, { Autoplay } from "swiper";
import { useRef, useEffect, useState } from "react";
import SingleApp2 from "../singlecard";

let AppSwiper = ({ data }) => {
 SwiperCore.use([Autoplay]);


  const [slidesPerView, setSlidesPerView] = useState(5);
  const [effect,setEffect] = useState({
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
    direction: "ltr",
  })
  useEffect(() => {


    const handleResize = () => {
      if(window.innerWidth <=1440){
        setSlidesPerView(4);
        if(window.innerWidth <=1024){
          setSlidesPerView(3);
          if(window.innerWidth <=980){
            setSlidesPerView(3.935);
            if(window.innerWidth <=768){
              setSlidesPerView(3.7);

              if (window.innerWidth < 600) {
                setSlidesPerView(1.85);
                
                if(window.innerWidth<500){
                  
                  setSlidesPerView(1.45);
                  
                  if(window.innerWidth < 400){
                    setEffect({
                      rotate: 0,
                      stretch: 0,
                      depth: 400,
                      modifier: 2,
                      slideShadows: false,
                      direction: "ltr",
                    })
        
                    setSlidesPerView(1.3);
        
                    if(window.innerWidth < 355){
        
                      setSlidesPerView(1.2);
        
                      if(window.innerWidth){
                        setSlidesPerView(1.1)
                      }
          
                    }
        
                  }
        
                }
              }   
            }

          }
     
        }
   

    }
    else if (window.innerWidth <= 2560 && window.innerWidth >=1920){
      setSlidesPerView(8)
    }
       else {
        setSlidesPerView(5.3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section>
        <div className={style.appswiperheader}>
          <div className={style.AppsPowered}>
            <h1>Apps Powered by Mobius </h1>
          </div>
        </div>
        <div className={style.appswipermain}>
          <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            initialSlide={4}
            grabCursor={true}
            loop={true}
            slidesPerView={slidesPerView}
            coverflowEffect={effect}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            modules={[EffectCoverflow, Pagination]}
            className={style.mySwiper2landingpage}
          >
            <SwiperSlide className="swipercs">
              <SingleApp2
                image={"1.png"}
                heading={"C-Link"}
                content={`C-Link citizen engagement app is a mobile application that
             allows citizens to report non-emergency issues to their
             local government and receive updates on the status of
             their requests.`}
                Route={"/products/C-Link"}
              ></SingleApp2>
            </SwiperSlide>

            <SwiperSlide className="swipercs">
              <SingleApp2
                image={"2.png"}
                heading={"Around"}
                content={`A Mobius Intelligent Application that leverages NextGenTV capabilities to provide real-time interactive maps with location-based information, including points of interest, directions, and local events.Around enriches the user experience by offering dynamic and visually appealing map features.`}
                Route={"/solutions/live-maps"}
              ></SingleApp2>
            </SwiperSlide>

            <SwiperSlide className="swipercs">
              <SingleApp2
                image={"3.png"}
                heading={"Aegis"}
                content={`Aegis MIA provides real-time, intelligent alerting capabilities to improve emergency response times, coordination, and effectiveness. With advanced notification systems and streamlined communication channels, Aegiss can quickly and efficiently address critical incidents, saving lives and minimizing damages.`}
                Route={"/products/fra"}
              ></SingleApp2>
            </SwiperSlide>

            <SwiperSlide className="swipercs">
              <SingleApp2
                image={"dig.png"}
                heading={"ImpressIO"}
                content={`ImpressIO, powered by Mobius DTaaS, revolutionizes the signage industry by providing an interactive, scalable, and collaborative solution, enabling businesses to create engaging content, leverage real-time data insights, streamline operations, and generate new revenue streams.`}
                Route={"/products/ImpressIO"}
              ></SingleApp2>
            </SwiperSlide>

            <SwiperSlide className="swipercs">
              <SingleApp2
                image={"suh.png"}
                heading={"iZAK"}
                content={`iZAK is a groundbreaking SaaS application built on the Mobius DTaaS Low Code Platform, utilizing its five powerful tools. iZAK reimagines the way software updates and home automation are delivered to consumer electronic (CE) devices, leveraging the ATSC 3.0/NextGenTV spectrum for efficient and seamless updates.`}
                Route={"/products/iZAK"}
              ></SingleApp2>
            </SwiperSlide>

            <SwiperSlide className="swipercs">
              <SingleApp2
                image={"live_news_swiper.jpg"}
                heading={"Live News"}
                content={`The Live News App is a next-generation TV application built on top of Mobius as a fullscreen TV app delivered over ATSC 3.0 spectrum,  designed to enable NextGenTV broadcasters to offer personalized, hyper-targeted, and rich-media news content to their consumers.`}
                Route={"/products/live-news"}
              ></SingleApp2>
            </SwiperSlide>
            <SwiperSlide className="swipercs">
              <SingleApp2
                image={"2.png"}
                heading={"Live Traffic"}
                content={`Live Traffic is an innovative, next-generation TV application built on top of Mobius, designed to deliver real-time traffic updates and insights directly to viewers through fullscreen TV apps using ATSC 3.0 spectrum. `}
                Route={"/products/live-traffic"}
              ></SingleApp2>
            </SwiperSlide>
            <SwiperSlide className="swipercs">
              <SingleApp2
                image={"giving_swiper.jpg"}
                heading={"AmplyFund"}
                content={`Simplify and optimize fund raising campaigns with our Fund Raising MIA, enabling organizations to raise funds efficiently and effectively.`}
                Route={"/products/amplyfund"}
              ></SingleApp2>
            </SwiperSlide>
            <SwiperSlide className="swipercs">
              <SingleApp2
                image={"2.png"}
                heading={"ZoomBot Pro"}
                content={`ZoomBot Pro is a powerful and innovative SaaS application built on top of the Mobius DTaaS Low Code Platform. It is designed to help businesses using the Zoom Communications Platform to measure meeting productivity, gain insights into meeting conversations, and receive participant behavioral feedback.`}
                Route={"/products/zoombot-pro"}
              ></SingleApp2>
            </SwiperSlide>
            <SwiperSlide className="swipercs">
              <SingleApp2
                image={"hd_radio_swiper.jpg"}
                heading={"Hear. Here."}
                content={`Enhance the radio listening experience with our Hear. Here. MIA, delivering high-quality audio and interactive features for immersive content.`}
                Route={"/products/hear-here"}
              ></SingleApp2>
            </SwiperSlide>


          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AppSwiper;
