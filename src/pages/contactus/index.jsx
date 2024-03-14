// import L from 'leaflet';

// import 'leaflet/dist/leaflet.css';
import Style from "./index.module.css";
import ProductExp from "../../components/ProductEndExplaner";
import MapComponent from "../../components/contact/mapcomponent";
// import Img from "../../components/Image";
import Carousel from "../../components/contact/CarouselComponent/Carousel";
import Image from "next/image";

let Contact = () => {
  return (
    <div className={Style.maindivcontactspage}>
      <section className={Style.topcont1}>
        <div id={Style.contacthead}>
          <h1>Hola,how can we help?</h1>
          <p>
            Ready to transform your enterprise with digital
            transformation-as-a-service? Get in touch with our expert team today
            and embark on a journey towards unparalleled innovation and success.
          </p>
          {/* <h2>Get in Touch</h2> */}
          <h2>
            {" "}
            <a href="/contact">Get in Touch</a>
          </h2>

          <div className={Style.botconthead}>
            <div>
              <h1>Ready To Help, across borders !</h1>
            </div>
          </div>
        </div>
      </section>

      <section className={Style.botcont}>
        {/* <div className={Style.botconthead}>
          <div>
            <h1>Ready To Help, across borders !</h1>
          </div>
        </div> */}

        <div id={Style.mapcont}>
          {/* <div className={Style.MapMain}><MapComponent /></div> */}

          <div className={Style.mapcontlocations}>
            <div className={Style.maplocationshead}>Our Locations</div>

            <div className={Style.mapcontent1}>
              <div className={Style.mapcontent1section1}>
                <Image
                  src={"/images/contact/location pin.png"}
                  width={15}
                  height={15}
                ></Image>
              </div>
              <div className={Style.mapcontent1section2}>
                <div className={Style.section2head}>USA</div>
                <div className={Style.section2desc}>
                  1968 S Coast Hwy, Suite 1511, Laguna Beach, CA 92651, United
                  States
                </div>
                <div className={Style.section2bottom}>
                  <div className={Style.logo}>
                    <Image
                      src={"/images/contact/phone.png"}
                      width={15}
                      height={15}
                    ></Image>
                  </div>
                  <div className={Style.num}>+1 (415) 624 7431</div>
                </div>
                <div className={Style.section2bottom}>
                  <div className={Style.logo.envelope}>
                    <Image
                      src={"/images/contact/envelope.png"}
                      width={15}
                      height={15}
                    ></Image>
                  </div>
                  <div>usaoffice@mobiusplatforms.com</div>
                </div>
              </div>
            </div>

            <div className={Style.mapcontent1}>
              <div className={Style.mapcontent1section1}>
                <Image
                  src={"/images/contact/location pin.png"}
                  width={15}
                  height={15}
                ></Image>
              </div>
              <div className={Style.mapcontent1section2}>
                <div className={Style.section2head}>India</div>
                <div className={Style.section2desc}>
                  5th Floor, NAVAYUGA VIZVA, GachiBowli, Hyderabad 150032.
                </div>
                <div className={Style.section2bottom}>
                  <div className={Style.logo}>
                    <Image
                      src={"/images/contact/phone.png"}
                      width={15}
                      height={15}
                    ></Image>
                  </div>
                  <div className={Style.num}>+91 (402) 980 0716</div>
                </div>
                <div className={Style.section2bottom}>
                  <div className={Style.logo.envelope}>
                    <Image
                      src={"/images/contact/envelope.png"}
                      width={15}
                      height={15}
                    ></Image>
                  </div>
                  <div>indiaoffice@mobiusplatforms.com</div>
                </div>
              </div>
            </div>

            <div className={Style.mapcontent1}>
              <div className={Style.mapcontent1section1}>
                <Image
                  src={"/images/contact/location pin.png"}
                  width={15}
                  height={15}
                ></Image>
              </div>
              <div className={Style.mapcontent1section2}>
                <div className={Style.section2head}>Singapore</div>
                <div className={Style.section2desc}>
                  11 Woodlands Close #07-13, Woodlands 11, Singapore(737853)
                </div>
                <div className={Style.section2bottom}>
                  <div className={Style.logo}>
                    <Image
                      src={"/images/contact/phone.png"}
                      width={15}
                      height={15}
                    ></Image>
                  </div>
                  <div className={Style.num}>+65 6587 4666</div>
                </div>
                <div className={Style.section2bottom}>
                  <div className={Style.logo.envelope}>
                    <Image
                      src={"/images/contact/envelope.png"}
                      width={15}
                      height={15}
                    ></Image>
                  </div>
                  <div>indiaoffice@mobiusplatforms.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={Style.CarouselMain}>
        <Carousel></Carousel>
      </div>

      {/* <section className={Style.topcont1}> */}
      <ProductExp
        heading={"Your Trusted Digital Transformation Partner"}
        content={
          "Get in touch with our expert team to understand how Mobius Platform can accelerate your digital transformation journey"
        }
        btn={"Contact Us"}
        url={"/contact"}
        open={false}
      ></ProductExp>
      {/* </section> */}
    </div>
  );
};

export default Contact;
