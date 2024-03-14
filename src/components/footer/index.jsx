import images from "../../constants/images";

import Style from "./index.module.css";
const Footer = () => {
  return (
    <footer className={Style.footermain1}>
      {/* <hr /> */}
      <div className={Style.footermain + ""}>
        <div className={Style.topcont + "  "}>
          <nav>
            <h5 className={Style.header}>Company</h5>
            <ul className={Style.cards1 + " md:mt-9"}>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/vision-and-mission">
                  Mission and Vision
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/careers">
                  Careers
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/About">
                  Overview
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/comingsoon">
                  People
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/contactus">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h5 className={Style.header}>Solutions</h5>
            <ul className={Style.cards1 + " md:mt-9"}>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/solutions/NextGen-TV">
                  NextGen TV
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/solutions/runrun">
                  Run Run
                </a>
              </li>
              <li className={Style.listelements}>
                <a
                  className={Style.navlink}
                  href="/solutions/smart-city-as-a-service"
                >
                  Smartcities as a Service
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/solutions/moScribe">
                  moScribe
                </a>
              </li>
              {/* <li className={Style.listelements}>
                <a className={Style.navlink} href="/solutions/Antara">
                  Antara
                </a>
              </li> */}
            </ul>
          </nav>
          <nav>
            <h5 className={Style.header}>Product</h5>
            <ul className={Style.cards1 + " md:mt-9"}>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/products/iZAK">
                  iZAK
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/products/live-news">
                  Live news
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/products/Impressio">
                  Impressio
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/products/C-Link">
                  C-Link
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/products/live-traffic">
                  Live Traffic
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h5 className={Style.header}>Platform</h5>
            <ul className={Style.cards1 + " md:mt-9"}>
              <li className={Style.listelements}>
                <a
                  className={Style.navlink}
                  href="/platform/pascal-intelligence"
                >
                  Pascal Intelligence(PI)
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/platform/boltzman-bot">
                  Boltzmann's Bot(BOB)
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/platform/monet">
                  Monet
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/platform/vinci">
                  Vinci
                </a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/platform/holacracy">
                  Holacracy
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={Style.bottomfolder}>
          <nav>
            {/* <ul className="flex flex-row justify-center items-center"> */}
            <ul className={Style.icons}>
              <li className={Style.mx}>
                <a href="https://www.linkedin.com/company/14438464/">
                  <img src={images.linkedin} alt="Linkedin Icon" />
                </a>
              </li>
              <li className={Style.mx}>
                <a href="https://www.instagram.com/gaiansolutions/">
                  <img src={images.Instagram} alt="Instagram Icon" />
                </a>
              </li>
              <li className={Style.mx}>
                <a href="https://twitter.com/Gaian_Solutions">
                  <img src={images.Twitter} alt="Twitter Icon" />
                </a>
              </li>
              <li className={Style.mx}>
                <a href="https://www.youtube.com/@Gaiansolutions">
                  <img src={images.Youtube} alt="Facebook Icon" />
                </a>
              </li>
            </ul>
          </nav>
          <div className={Style.bottomcontent}>
            <div className={Style.Termscontent}>
              <a href="/terms-and-conditions">
                Terms and Conditions&nbsp;| &nbsp;
              </a>
            </div>
            <div>All Rights Reserved. 2023 Copyright&nbsp; &nbsp;</div>
            <div>
              <a href="/" className={Style.routingcontent}>
                Gaian Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
