import TextandImage from "../../../components/textAndImage";
import Security from "../../../components/Security";
import ProductExp from "../../../components/ProductEndExplaner";
import style from "./index.module.css";
import DigitalMenu2 from "../../../components/digitalmenu2";
import Panelcomponent from "../panelcontainer";
import Prebuilt from "../prebuiltcomponent";
import AndroidApps from "../../../components/AndroidAppsSwiper";
import AppSwiper from "../../../components/appSwiper";
const Section2 = () => {
  const changeRoute = (Route) => {
    window.location.href = Route;
  };
  return (
    <>
      <section className="">
        <Panelcomponent></Panelcomponent>
      </section>
      <section className="">
        <TextandImage
          text1="Faster Time to Value"
          text2="Save time with a pure low code platform. Integrate, test & deploy applications at lightning speed"
          img="/imagesnew/Gif-assets/Pi.gif"
          side="right"
        ></TextandImage>

        <TextandImage
          text1="Build Businesses
                    of the Future"
          text2="Save time with a pure low code platform. Integrate, test & deploy applications at lightning speed"
          img="/imagesnew/Gif-assets/monet.gif"
          side="left"
        ></TextandImage>

        <TextandImage
          text1="A Marketplace of
                    Connectors"
          text2="Mobius Suite offers an integrated marketplace to form new alliances & expand to new verticals"
          img="/imagesnew/Gif-assets/bob1.gif"
          side="right"
        ></TextandImage>
      </section>
      <div className={style.mainsecbottom}>
        <section>
          <DigitalMenu2></DigitalMenu2>
        </section>
        <section>
          <Prebuilt></Prebuilt>
        </section>
        <section>
          <AndroidApps></AndroidApps>
        </section>
        <section>
          <AppSwiper></AppSwiper>
        </section>
        <section>
          <Security
            heading={"Enterprise Grade Trust and Security"}
            content={
              "Mobius Suite integrates with thousands of Apps, APIs, Content, IT & Infrastructure providers across various domains throughout the globe"
            }
            img={"/images/Security/8.png"}
          ></Security>
        </section>
        <section>
          <ProductExp
            heading={
              "Discover Mobius DTaaS -Your Ultimate Accelerator for Business Success!"
            }
            content={
              "Revolutionize your business with Mobius DTaaS, the all-in-one platform for rapid digital transformation. Harness the synergy of five cutting-edge tools to drive innovation, efficiency, and growth."
            }
            btn={"Book a Demo "}
            // url={"https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7"}
            url={
              "https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7"
            }
            open={true}
          ></ProductExp>
        </section>
      </div>
    </>
  );
};
export default Section2;
