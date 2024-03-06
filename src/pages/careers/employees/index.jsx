import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
// import images from '../../../constants/images';
// import "swiper/components/pagination/pagination.min.css"; // Import the pagination CSS
import "./index.css"; // Import your CSS file for styling (if needed)
import Img from "../../../components/Image";
// import Emp1careers_page from "../images/Career/emp1.png"
// import Emp2careers_page from "../images/Career/emp2.png"
// import Emp3careers_page from "../images/Career/emp3.png"
// import Career_09 from '../images/Career/8.svg'
SwiperCore.use([Pagination, Autoplay]);

const EmployeeSlider = () => {
  const contentData = [
    {
      heading: "Uma Soni",
      shortdesc: "Lead Engineering Manager",
      imagesrc: "/imagesnew/Career/emp1.png",
      description:
        "At Gaian, our mission is to accelerate the adoption of AI. Yet, amidst our technological advancements, we firmly uphold the significance of human connections. In our journey of building AI solutions, we never lose sight of the human element, cherishing our relationships with clients and teammates alike. This empathetic approach underscores every innovation, shaping technology that truly understands and serves human needs and fosters deep meaningful relationships.",
    },
    {
      heading: "Gurpreet Gandhi",
      shortdesc: "Senior Member of Technical Staff -2",
      imagesrc: "/imagesnew/Career/emp2.png",
      description:
        "Gaian has a unique focus on long-term growth and sustainability. Our projects aren't just about immediate results.They're about shaping the future of AI. It's exciting to be part of a company that's making such a long-lasting impact in the world for future generations.",
    },
    {
      heading: "K L Das",
      shortdesc: "Member of Technical staff",
      imagesrc: "/imagesnew/Career/KL_.jpg",
      description:
        "At Gaian, we're constantly pushing the boundaries of what's possible in AI. The culture of innovation here encourages us to think creatively, and it's rewarding to see our ideas come to life and make a real impact.",
    },
    {
      heading: " Sunil Kumar D",
      shortdesc: "Principal Architect & Director of Engineering",
      imagesrc: "/imagesnew/Career/emp3.png",
      description:
        "I've always admired Gaian's commitment to integrity. We're held to high ethical standards in all our work, which fosters a culture of trust and respect. It's reassuring to work for a company where doing the right thing is prioritized. Here, making mistakes is okay as long as you are learning from them and make them your stepping stones to success.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
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
        autoplay={{ delay: 5000 }}
        onSlideChange={handleSlideChange}
      >
        {contentData.map((content, index) => (
          <SwiperSlide key={index}>
            <div className="contentemployee">
              <div className="employeeimage">
                <div className="imagefoldermain">
                  <Img src={content.imagesrc} />
                </div>
              </div>
              <div className="employeedetails">
                <div>
                  {" "}
                  <p className="employeeheading"> {content.heading}</p>{" "}
                </div>
                <div>
                  <p className="employeeshortdesc"> {content.shortdesc}</p>
                </div>
                <div>
                  <p className="employeedescription">{content.description}</p>
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

export default EmployeeSlider;
