import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import Style from "./index.module.css";
// import Img from "../../../components/Image";
import Image from "next/image";

SwiperCore.use([Pagination, Autoplay]);

const Carousel = () => {
  const contentData = [
    {
      heading: "United States",
      imagesrc1: "/images/contact/location pin.png",
      description:
        "1968 S Coast Hwy, Suite 5011, Laguna Beach, California, USA 9265.",
      imagesrc2: "/images/contact/phone.png",
      num: "+1 (415) 624 7431",
      imagesrc3: "/images/contact/envelope.png",
      mail: "usaoffice@mobiusplatforms.com",
    },
    {
      heading: "India",
      imagesrc1: "/images/contact/location pin.png",
      description: "5th Floor, NAVAYUGA VIZVA, GachiBowli, Hyderabad 500032.",
      imagesrc2: "/images/contact/phone.png",
      num: "+91 (402) 980 0716",
      imagesrc3: "/images/contact/envelope.png",
      mail: "indiaoffice@mobiusplatforms.com",
    },
    {
      heading: "Singapore",
      imagesrc1: "/images/contact/location pin.png",
      description:
        "11 Woodlands Close #07-13, Woodlands 11, Singapore (737853).",
      imagesrc2: "/images/contact/phone.png",
      num: "+65 6587 4666",
      imagesrc3: "/images/contact/envelope.png",
      mail: "indiaoffice@mobiusplatforms.com",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <div className={Style.mapcontlocations}>
      <div className={Style.maplocationshead}>Our Locations</div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          loop: true,
        }}
        loop
        // autoplay={{ delay: 4000 }}
        onSlideChange={handleSlideChange}
      >
        {contentData.map((content, index) => (
          <SwiperSlide key={index}>
            <div className={Style.mapcontent1}>
              <div className={Style.mapcontent1section1}>
                <Image src={content.imagesrc1} width={40} height={42}></Image>
              </div>

              <div className={Style.mapcontent1section2}>
                <div className={Style.section2head}>{content.heading}</div>
                <div className={Style.section2desc}>{content.description}</div>

                <div className={Style.section2bottom}>
                  <div className={Style.logo}>
                    <Image src={content.imagesrc2}width={15}
                      height={15}></Image>
                  </div>
                  <div className={Style.num}>{content.num}</div>
                </div>

                <div className={Style.section2bottom}>
                  <div className={Style.logo}>
                    <Image src={content.imagesrc3} width={15}
                      height={15}></Image>
                  </div>
                  <div>{content.mail}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pagination-dotsemployee">
        {contentData.map((_, index) => (
          <div
            key={index}
            className={`dotemployee ${index === activeSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
