import Style from "./index.module.css";
import Img from "../../../components/Image";
// import images from "../../../constants/images";
import { useState } from "react";
// import images from '../../../../'  src={images.Career_05}

// import Img from "../../../components/Image";
// import Careergrowth_image1 from "../images/Career/Joinus_images_careerspage/upskilling.svg"
// import Careergrowth_image2 from "../images/Career/Joinus_images_careerspage/Mobiusstudio.svg"
// import Careergrowth_image3 from "../images/Career/Joinus_images_careerspage/careerprogress.svg"
// import Careergrowth_image4 from "../images/Career/Joinus_images_careerspage/mobiustalks.svg"
// import Careergrowth_image5 from "../images/Career/Joinus_images_careerspage/Esops.svg"
function Growthprogram(index = 0) {
  const menu = [
    {
      name: "ESOPs Plan",
      heading: "ESOPs Plan",
      image: "/imagesnew/Career/Joinus_images_careerspage/Esops.svg",
      active: false,
      description:
        "GAIAN values its employees' dedication and hard work. Through Employee Stock Ownership Plans (ESOPs), we empower our team to become stakeholders in the company's success. Join us, and reap the rewards of shared ownership while building a prosperous future together.",
    },
    {
      name: "Upskilling & Reskilling",
      heading: "Upskilling & Reskilling",
      image: "/imagesnew/Career/Joinus_images_careerspage/upskilling.svg",
      active: false,
      description:
        "Unlock your true potential with our SKILL UP program. Stay ahead in the ever-evolving skill requirements by enhancing your expertise in the latest technologies. Our expert mentors will guide you through hands-on training, empowering you to take on new challenges and excel in your career. Embrace growth today!",
    },
    {
      name: "Mobius Talks",
      heading: "Mobius Talks",
      image: "/imagesnew/Career/Joinus_images_careerspage/mobiustalks.svg",
      active: false,
      description:
        "Discover inspiring insights from industry leaders in our Guest Speaker Sessions. In these sessions renowned experts share their knowledge, expertise, and vision for the ever-evolving IT landscape. Stay ahead of the curve with thought-provoking discussions and gain valuable takeaways to fuel your success in the digital world.",
    },
    {
      name: "Mobius Startup Studio Program",
      heading: "Mobius Startup Studio Program",
      image: "/imagesnew/Career/Joinus_images_careerspage/Mobiusstudio.svg",
      active: false,
      description:
        "Embark on your entrepreneurial journey with our 'Build Your Own Startup' program. Unleash your innovative ideas and turn them into reality with our expert guidance and comprehensive support. From concept to launch, we equip you with the tools and knowledge to build a successful startup in the ever-evolving IT landscape.",
    },
    {
      name: "Career Progression Tool ",
      heading: "Career Progression Tool ",
      active: false,
      image: "/imagesnew/Career/Joinus_images_careerspage/careerprogress.svg",
      description:
        "We are dedicated to shaping you as an individual, fostering holistic growth through personalized development plans. Unlock your full potential with our innovative personality development resources, empowering you to excel in your IT career and beyond. Embrace transformation and embrace success!",
    },
  ];

  const [program, setprogram] = useState("0");
  const [heading, setHeading] = useState(menu[0].heading);
  const [content, setContent] = useState(menu[0].description);
  const [state_active, setActive] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  // Data

  const stateChanger = (id) => {
    setprogram(id);
    setHeading(menu[id].heading);
    setContent(menu[id].description);
    setActive((prevState) => ({
      ...prevState,
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      [id]: true,
    }));
  };
  function list(item, id, active) {
    return (
      <li
        className={Style.List}
        key={id}
        onClick={() => {
          stateChanger(id);
        }}
      >
        <div className={state_active[id] ? Style.active_li : ""}>{item}</div>
      </li>
    );
  }
  let ele = menu.map((i, id) => {
    return list(i.name, id, i.active);
  });

  return (
    <>
      <div className={Style.wholeback}>
        <div className={Style.contmain}>
          <div>
            <div className={Style.cont1}>
              <h2 className={Style.Heading}>Personalised Growth Programs</h2>
            </div>
          </div>
          <div className={Style.cont2}>
            <div className={Style.cont2section1}>
              <div className={Style.Li}>{ele}</div>
              <div className={Style.digitalcontmain} style={{}}>
                <h2 className={Style.DigitalHeading}>{heading}</h2>
                <h2 className={Style.DigitalContent}>{content}</h2>
              </div>
            </div>

            <div className={Style.cont2section2}>
              <div>
                {" "}
                <Img
                  src={menu[program].image}
                  className={Style.digitalimg}
                ></Img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Growthprogram;
