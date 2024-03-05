
import React,{useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/swiper.min.css';
// import "./changingContent.css";
import St from "./index.module.css"
// import { Pagination } from 'swiper';
const ChangingContent2 = (props) => {
// const index=props.activeSlideIndex
const setindex=props.setActiveSlideIndex

  const previousSlideIndexRef = useRef(0);

  const handleSlideChange = (swiper) => {
    const activeSlideIndex = swiper.realIndex; // Get the active slide index

    if (activeSlideIndex !== previousSlideIndexRef.current) {
setindex(activeSlideIndex)
      previousSlideIndexRef.current = activeSlideIndex;
    }
  };
  SwiperCore.use([Autoplay]);

  return (
   
    <Swiper
    // pagination={{
    //     clickable: true,
    //   }}
      // modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      // navigation
      autoplay={{ delay: 3000 }}
      loop
      onSlideChange={handleSlideChange}
      className={St.swiperlanding}

  
    >
      <SwiperSlide>
         <h6 className={St.contentfolder1}>PI-Pascal Intelligence - Unlock the Power of Data </h6>
        <h6 className={St.contentfolder2}>Achieve faster time to insight and make data-driven decisions with our unified big data analytics solution.</h6>
        </SwiperSlide>
        <SwiperSlide>
      <h6 className={St.contentfolder1}>BoltzmannBot - Smarter Workflow Automation for the Modern Business</h6>
             <h6 className={St.contentfolder2}>Achieve new levels of operational efficiency, productivity, and performance through intelligent process automation.</h6>
      </SwiperSlide>
        <SwiperSlide>
        <h6 className={St.contentfolder1}>Monét - Innovate Faster with Low-Code</h6>
             <h6 className={St.contentfolder2}>Our intuitive low-code platform empowers you to rapidly build <br /> and iterate on stunning applications.</h6>
        </SwiperSlide>
        <SwiperSlide>
        <h6 className={St.contentfolder1}>Vinci - The Power of Real-Time Engagement</h6>
             <h6 className={St.contentfolder2}>Harness the potential of real-time interactions to connect and engage across all touchpoints.</h6>
        </SwiperSlide>
        <SwiperSlide>
        <h6 className={St.contentfolder1}>Holacracy - The Power of Partnership and Collaboration</h6>
             <h6 className={St.contentfolder2}>Unlock growth opportunities through strategic alliances and ecosystem collaboration.</h6>
        </SwiperSlide>
    </Swiper>
  );
};

export default ChangingContent2;


















// // import { useState } from "react";
// import st from "./index.module.css";
// // import Button from "../buttons";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// // import "./styles.css"

// // import required modules
// import { Pagination } from "swiper";

// const Awesomeflip=()=>{
//   SwiperCore.use([Autoplay]);
//   return (
//     < >
//     <Swiper
//     pagination={{
//       clickable: true,
//     }}
//     modules={[Pagination]}
//     className="mySwiper"
//     loop={true}
//     autoplay=
//     {{
//       delay: 600,
//     }}
//     id={st.contentswiper}
//     >
//       <SwiperSlide >
//       <p>Composable Business Re-Engineering through low-code AI</p>
//       </SwiperSlide>
//       <SwiperSlide >
//       <p>Composable Business Re-Engineering through low-233fwuef2uy3wgeuwhg23I</p>
//       </SwiperSlide>
//       <SwiperSlide >
//       <p>Composable Business Re-Engineering through low-233232ugey823I</p>
//       </SwiperSlide>
//       <SwiperSlide >
//       <p>Composable Business Re-Engineering twuqguy2te8hrough low-23323I</p>
//       </SwiperSlide>
   
//     </Swiper>
//       </>
//   );
// }

// export default Awesomeflip;



// // import React, { useState, useEffect } from 'react';
// // import "./changingContent.css"

// // import './ChangingContent.css'; // Import the CSS file for styling

// // const ChangingContent = () => {
// //   const [contentIndex, setContentIndex] = useState(0);
// //   const contents = ['Content 1', 'Content 2', 'Content 3', 'Content 4', 'Content 5'];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
// //     }, 2000);

// //     return () => clearInterval(interval);
// //   });

// //   return (
// //     <div className="flip-container">
// //       <div className="flipper">
// //         <h3 className="front">{contents[contentIndex]}</h3>
// //         <h3 className="back">{contents[(contentIndex + 1) % contents.length]}</h3>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ChangingContent;

