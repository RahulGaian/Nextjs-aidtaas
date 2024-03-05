import React from "react";
import { useState } from "react";
// import Button from '../../../components/buttons';
import Img from "../../../components/Image";
// import Awesomeflip from '../awesomeflip';
import st from "./index.module.css";
import ChangingContent2 from "../awesomeflip";
import CustomerPartners from "../../../components/customerPartners";
const Topsection = () => {
  const imagessrc = [
    "/images/newbg/digital/0.png",
    "/images/newbg/digital/1.png",
    "/images/newbg/digital/2.png",
    "/images/newbg/digital/3.png",
    "/images/newbg/digital/4.png",
  ];
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <>
      <div className={st.maincont}>
        <div className={st.bgmain2}>
          <div className={st.contentcont}>
            <div id={st.maincontent}>
              <h1 id={st.heading1}>
                Tomorrow,<b id={st.heading2}> Delivered</b>
              </h1>
            </div>
            <div className={st.flipcontent}>
              <ChangingContent2
                setActiveSlideIndex={setActiveSlideIndex}
              ></ChangingContent2>
            </div>
            <div id={st.buttons}>
              {/* <a href='https://vcard.link/card/DeZi.vcf'id={st.btnmain} >Contact Us</a> */}
              <a href="/contact" id={st.btnmain}>
                Contact Us
              </a>
              {/* <Button text={"Contact Us"}  filled={false} href='https://vcard.link/card/DeZi.vcf' ></Button> */}
              <a
                id={st.btnmain2}
                href="https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7"
                target="_blank"
              >
                Book a Demo
              </a>


              {/* <div class="calendly-inline-widget" data-url="https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7" style="min-width:320px;height:700px;"></div> */}
            </div>
          </div>
          <div className={st.imagecont}>
            <Img src={imagessrc[activeSlideIndex]}></Img>
          </div>
        </div>
      </div>
      <div className={st.fullcont}>
        <div id={st.relations}>
          <div>
            <p id={st.relationtitle}>Our Customers & Partners</p>
          </div>
          <div id={st.relationcont}>
            {/* <div className={st.bottomcont}>
            <div><Img src={"/images/landingmainpagenew/cr1.png"}></Img></div>
            <div><Img src={"/images/landingmainpagenew/cr2.png"}></Img></div>
            <div><Img src={"/images/landingmainpagenew/cr3.png"}></Img></div>
        </div>
        <div className={st.bottomcont}>
            <div><Img src={"/images/landingmainpagenew/cr4.png"}></Img></div>
            <div><Img src={"/images/landingmainpagenew/cr5.png"}></Img></div>
            <div><Img src={"/images/landingmainpagenew/cr6.png"}></Img></div>
        </div>
        <div className={st.bottomcont}>
            <div><Img src={"/images/landingmainpagenew/cr7.png"}></Img></div>
            <div><Img src={"/images/landingmainpagenew/cr8.png"}></Img></div>
            <div><Img src={"/images/landingmainpagenew/cr9.png"}></Img></div>
        </div> */}
            <CustomerPartners></CustomerPartners>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topsection;

//  <div id={st.cardcontent2}>
// <div className={st.cardcontainer}>
//       <button onClick={handlePrevious}>
//         <Img src={"images/landingpage_images_new/leftvector.png"} className={st.arrowbutton}></Img>
//       </button>
//       <div className={st.cardcontentcontainer}>
//         <div className={st.imagecontainer}>
//         <Img src={imageurl}></Img>
//         </div>
//         <div className={st.contentcontainer}>
//           <h2>{name}</h2>
//           <p>{description}</p>
//         </div>
//       </div>
//       <button  onClick={handleNext}>
//         <Img src={"images/landingpage_images_new/rightvector.png"} className={st.arrowbutton}></Img>
//       </button>
//     </div>
// </div>

// const [currentCard, setCurrentCard] = useState(0);
// const cardsData = [
//   {
//     name: "SaaSifying Digital Transformation",
//     imageurl:"images/landingpage_images_new/interface.png",
//     description:
//       "Our advanced SaaS tools enable lightning-speed digital transformation through low-code and XaaS phygital transformation. Streamline operations, enhance customer experiences, and create new value in weeks. Our platform is agile, innovative, cost-effective, and scalable to meet market needs.",
//   },
//   {
//     name: "Phygital Transformation",
//     imageurl:"images/landingpage_images_new/phygitalimage.png",
//     description:
//       "Mobius DTaaS achieves convergence between physical and digital worlds through Phygital Transformation. Its SaaS tools - Pascal Intelligence, BoltzmannBot, Monet, Vinci, and HolaVerse - empower businesses to streamline operations, enhance customer experiences, and drive phygital innovation. By combining human and machine capabilities, Mobius DTaaS transforms operations, creates new revenue streams, and unlocks new possibilities.",
//   },
//   {
//     name: "Accountable Transformation",
//     imageurl:"images/landingpage_images_new/accountableimg.png",
//     description:
//       "Mobius DTaaS provides businesses with a suite of SaaS tools for accountable, responsible, and monetizable digital transformation. These tools measure effectiveness, enhance digital capabilities, and enable businesses to improve customer experiences and achieve measurable outcomes such as increased revenue and reduced costs.",
//   },
//   {
//     name: "SaaS Factory",
//     imageurl:"images/landingpage_images_new/saasfactoryimg.png",
//     description:
//       "Mobius DTaaS is a SaaS factory that enables scalable digital transformation with cutting-edge tools. With constantly improving services, Mobius DTaaS delivers flexible, cost-effective, and reliable solutions compared to traditional software deployment models.",
//   },
//   {
//     name: "Inter-org Digital Transformation",
//       imageurl:"images/landingpage_images_new/interorgimg.png",
//     description:
//       "Mobius DTaaS enables digital transformation between organizations through API integrations, streamlining operations and reducing manual interventions. Its secure platform and API-first approach provide greater agility, scalability, and efficiency, accelerating digital transformation journeys and achieving better business outcomes.",
//   },
// ];

// const handlePrevious = () => {
//   setCurrentCard((prevCard) => (prevCard === 0 ? cardsData.length - 1 : prevCard - 1));
// };
// const handleNext = () => {
//   setCurrentCard((prevCard) => (prevCard === cardsData.length - 1 ? 0 : prevCard + 1));
// };
// const {name,description,imageurl} = cardsData[currentCard];
