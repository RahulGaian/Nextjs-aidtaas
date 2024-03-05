// import { useState } from "react";
import st from "./index.module.css";
// import Button from "../buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css"

// import required modules
import { Pagination } from "swiper";

function Awesometeammain() {
  SwiperCore.use([Autoplay]);
  return (
    <>
    {/* <h1 className={st.hs1}>Join our Awesome Team</h1>     */}
    <Swiper
    direction={"vertical"}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    loop={true}
    autoplay=
    {{
      delay: 600,
    }}

    // delay={200}
    id={st.swiperId}
    >
      <SwiperSlide >
        <h1 className={st.hack} >Hackers</h1 >
      </SwiperSlide>
      <SwiperSlide >
       <h1 className={st.hack} >Engineers</h1 >
      </SwiperSlide>
      <SwiperSlide >
    <h1 className={st.hack} >Artists</h1 >
      </SwiperSlide>
      <SwiperSlide >
        <h1 className={st.hack} >Nerds</h1 >
      </SwiperSlide>
   
    </Swiper>
      </>
  );
}

export default Awesometeammain;
