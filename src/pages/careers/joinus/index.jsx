import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
// import images from "../../../constants/images";
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"; // Import the pagination CSS
import "./index.css"; // Import your CSS file for styling (if needed)
import Img from "../../../components/Image";

// import CareerJoinus_image1 from "../images/Career/Joinus_images_careerspage/image1.png"
// import CareerJoinus_image2 from "../images/Career/Joinus_images_careerspage/image2.png"
// import CareerJoinus_image3 from "../images/Career/Joinus_images_careerspage/image3.png"
// import CareerJoinus_image4 from "../images/Career/Joinus_images_careerspage/image4.png"
// import CareerJoinus_image5 from "../images/Career/Joinus_images_careerspage/image5.png"
SwiperCore.use([Pagination, Autoplay]);

const ContentSlider = () => {
  const contentData = [
    {
      heading: "Unleash Your Potential",
      description:
        " At Gaian, you won't just have a job; you'll embark on a transformative journey. We empower our employees to unleash their full potential, providing opportunities for continuous learning and personal development.",
      imageurl: "/imagesnew/Career/Joinus_images_careerspage/image1.png",
    },
    {
      heading: "Make an Impact",
      description:
        "Join us in shaping the future. Our work goes beyond mere transactions; it's about leaving a positive mark on the world. At Gaian, your efforts will contribute to solutions that redefine industries and uplift communities.",
      imageurl: "/imagesnew/Career/Joinus_images_careerspage/image2.png",
    },
    {
      heading: "A Culture of Belonging",
      description:
        "We are more than colleagues; we are a close-knit family. Experience the warmth of camaraderie, where collaboration is celebrated, and diverse perspectives are valued.",
      imageurl: "/imagesnew/Career/Joinus_images_careerspage/image3.png",
    },
    {
      heading: "Empowerment and Growth",
      description:
        "Your growth is our success. We foster a culture that empowers you to take ownership, lead with confidence, and grow both personally and professionally.",
      imageurl: "/imagesnew/Career/Joinus_images_careerspage/image4.png",
    },
    {
      heading: "Work-Life Harmony",
      description:
        "At Gaian, we understand the importance of work-life harmony. We support flexible work arrangements, ensuring that you can achieve balance and cherish your moments with loved ones.",
      imageurl: "/imagesnew/Career/Joinus_images_careerspage/image5.png",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex); // Use realIndex to get the correct active slide index
  };

  return (
    <div className="Joinus_component">
      <div className="content-slider">
        <div className="content_sliderhead">Perks & Benefits</div>
        <p id="pid">
          Enjoy everyday at Work. Mobius benefits and perks that will accompany
          you at work and at life.
        </p>
        <div className="content_swipermain">
          <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              // navigation
              pagination={{
                clickable: true,
                loop: true,
              }}
              loop
              autoplay={{ delay: 3000 }}
              onSlideChange={handleSlideChange}
            >
              {contentData.map((content, index) => (
                <SwiperSlide key={index}>
                  <h1 className="swiperheading">{content.heading}</h1>
                  <p className="swiperdescription">{content.description}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* <div>
        <p className="staticcontent desc2">
        Join us on this extraordinary journey where you will be valued, celebrated, and inspired to be the best version of yourself. Your career is not just a job; it's a chapter of purpose, growth, and fulfillment. Together, let's create a legacy that transcends generations and leaves an indelible mark on the world.
        </p>
      </div> */}
        </div>
        <div className="pagination-dots">
          {contentData.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === activeSlide ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
      <div className="content_image">
        <div>
          <Img src={contentData[activeSlide].imageurl} />
        </div>
      </div>
    </div>
  );
};

export default ContentSlider;
