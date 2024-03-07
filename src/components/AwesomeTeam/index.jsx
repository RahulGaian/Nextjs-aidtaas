import st from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { Pagination } from "swiper";

function Awesometeammain() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        loop={true}
        autoplay={{
          delay: 600,
        }}
        id={st.swiperId}
      >
        <SwiperSlide>
          <h1 className={`${st.hack} ${st.center}`}>Hackers</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className={`${st.hack} ${st.center}`}>Engineers</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className={`${st.hack} ${st.center}`}>Artists</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className={`${st.hack} ${st.center}`}>Nerds</h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Awesometeammain;
