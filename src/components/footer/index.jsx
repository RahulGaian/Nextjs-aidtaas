import images from "../../constants/images";
import Link from "next/link";
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
                <Link className={Style.navlink} href="/vision-and-mission">
                  Mission and Vision
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/careers">
                  Careers
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/About">
                  Overview
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/comingsoon">
                  People
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/contactus">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h5 className={Style.header}>Solutions</h5>
            <ul className={Style.cards1 + " md:mt-9"}>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/solutions/NextGen-TV">
                  NextGen TV
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/solutions/runrun">
                  Run Run
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link
                  className={Style.navlink}
                  href="/solutions/smart-city-as-a-service"
                >
                  Smartcities as a Service
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/solutions/moScribe">
                  moScribe
                </Link>
              </li>
              {/* <li className={Style.listelements}>
                <Link className={Style.navlink} href="/solutions/Antara">
                  Antara
                </Link>
              </li> */}
            </ul>
          </nav>
          <nav>
            <h5 className={Style.header}>Product</h5>
            <ul className={Style.cards1 + " md:mt-9"}>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/products/iZAK">
                  iZAK
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/products/live-news">
                  Live news
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/products/Impressio">
                  Impressio
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/products/C-Link">
                  C-Link
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/products/live-traffic">
                  Live Traffic
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h5 className={Style.header}>Platform</h5>
            <ul className={Style.cards1 + " md:mt-9"}>
              <li className={Style.listelements}>
                <Link
                  className={Style.navlink}
                  href="/platform/pascal-intelligence"
                >
                  Pascal Intelligence(PI)
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/platform/boltzman-bot">
                  Boltzmann's Bot(BOB)
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/platform/monet">
                  Monet
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/platform/vinci">
                  Vinci
                </Link>
              </li>
              <li className={Style.listelements}>
                <Link className={Style.navlink} href="/platform/holacracy">
                  Holacracy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={Style.bottomfolder}>
          <nav>
            {/* <ul className="flex flex-row justify-center items-center"> */}
            <ul className={Style.icons}>
              <li className={Style.mx}>
                <Link href="https://www.linkedin.com/company/14438464/">
                  <img src={images.linkedin} alt="Linkedin Icon" />
                </Link>
              </li>
              <li className={Style.mx}>
                <Link href="https://www.instagram.com/gaiansolutions/">
                  <img src={images.Instagram} alt="Instagram Icon" />
                </Link>
              </li>
              <li className={Style.mx}>
                <Link href="https://twitter.com/Gaian_Solutions">
                  <img src={images.Twitter} alt="Twitter Icon" />
                </Link>
              </li>
              <li className={Style.mx}>
                <Link href="https://www.youtube.com/@Gaiansolutions">
                  <img src={images.Youtube} alt="Facebook Icon" />
                </Link>
              </li>
            </ul>
          </nav>
          <div className={Style.bottomcontent}>
            <div className={Style.Termscontent}>
              <Link href="/terms-and-conditions">
                Terms and Conditions&nbsp;| &nbsp;
              </Link>
            </div>
            <div>All Rights Reserved. 2023 Copyright&nbsp; &nbsp;</div>
            <div>
              <Link href="/" className={Style.routingcontent}>
                Gaian Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
