"use client";
import Style from "./header.module.css";
import { useState, useEffect } from "react";
import Platform from "./menudropdown/platform";
import Company from "./menudropdown/company";
import Solutions from "./menudropdown/solutions";
import Products from "./menudropdown/products";
import Firstview from "./mobiledropdown/firstview";
import Services from "./menudropdown/service";
import Img from "next/image";
import data from "./headerData";
import { useRouter } from "next/router";

function Header() {
  const data1 = [data[0]];
  const data2 = [data[1]];
  const data3 = [data[2]];
  const data4 = [data[4]];
  const data5 = [data[3]];
  const router2 = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isprod, setIsprod] = useState(false);
  const [isplatform, setplatform] = useState(false);
  const [iscompany, setcompany] = useState(false);
  const [isservice, setservice] = useState(false);

  const [isdropped, setisdropped] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePlatform = () => {
    setplatform(!isplatform);
    setcompany(false);
    setservice(false);
    setIsOpen(false);
    setIsprod(false);
  };

  const handleCompany = () => {
    setcompany(!iscompany);
    setservice(false);
    setIsOpen(false);
    setIsprod(false);
    setplatform(false);
  };
  const handleservice = () => {
    setservice(!isservice);
    setIsOpen(false);
    setIsprod(false);
    setplatform(false);
    setcompany(false);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsprod(false);
    setplatform(false);
    setcompany(false);
    setservice(false);
  };

  const handleprod = () => {
    setIsprod(!isprod);
    setplatform(false);
    setcompany(false);
    setservice(false);
    setIsOpen(false);
  };

  // const [rotation, setRotation] = useState(0);

  // const handlelogin = () => {
  //   setRotation(rotation + 180);
  // };
  // import DownArrow from "../images/icons/Vector.svg"

  return (
    <>
      <div className={Style.header}>
        <div
          className={isScrolled ? Style.navbar2 : Style.navbar1}
          onMouseEnter={() => {
            setIsOpen(false);
          }}
        >
          <div className={Style.headercomponents}>
            <div id={Style.contents}>
              <div
                className={Style.logo}
                onClick={() => {
                  // window.location.href = "/";
                  router2.push("/");
                }}
              >
                <Img src={"/imagesnew/brand-logo.svg"} width={50} height={50} />
              </div>

              <div className={!isOpen ? Style.marginfixer1 : Style.marginfixer}>
                <div
                  className={Style.text}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Solutions
                </div>

                <div className={Style.bottombar}></div>

                {!isOpen ? (
                  ""
                ) : (
                  <div className={Style.bottombar2}>
                    <Img
                      src={"/imagesnew/icons/Vector.svg"}
                      width={50}
                      height={50}
                    />
                  </div>
                )}
              </div>
              <div className={!isprod ? Style.marginfixer1 : Style.marginfixer}>
                <div
                  className={Style.text}
                  onClick={() => {
                    handleprod();
                  }}
                >
                  Products
                </div>

                <div className={Style.bottombar}></div>

                {!isprod ? (
                  ""
                ) : (
                  <div className={Style.bottombar2}>
                    <Img
                      src={"/imagesnew/icons/Vector.svg"}
                      width={50}
                      height={50}
                    />
                  </div>
                )}
              </div>
              <div
                className={!isplatform ? Style.marginfixer1 : Style.marginfixer}
              >
                <div
                  className={Style.text}
                  onClick={() => {
                    handlePlatform();
                  }}
                >
                  Platform
                </div>

                <div className={Style.bottombar}></div>

                {!isplatform ? (
                  ""
                ) : (
                  <div className={Style.bottombar2}>
                    <Img
                      src={"/imagesnew/icons/Vector.svg"}
                      width={50}
                      height={50}
                    />
                  </div>
                )}
              </div>
              <div
                className={!isservice ? Style.marginfixer1 : Style.marginfixer}
              >
                <div
                  className={Style.text}
                  onClick={() => {
                    handleservice();
                  }}
                >
                  Services
                </div>

                <div className={Style.bottombar}></div>

                {!isservice ? (
                  ""
                ) : (
                  <div className={Style.bottombar2}>
                    <Img
                      src={"/imagesnew/icons/Vector.svg"}
                      width={50}
                      height={50}
                    />
                  </div>
                )}
              </div>
              <div
                className={!iscompany ? Style.marginfixer1 : Style.marginfixer}
              >
                <div
                  className={Style.text}
                  onClick={() => {
                    handleCompany();
                  }}
                >
                  Company
                </div>

                <div className={Style.bottombar}></div>

                {!iscompany ? (
                  ""
                ) : (
                  <div className={Style.bottombar2}>
                    <Img
                      src={"/imagesnew/icons/Vector.svg"}
                      width={50}
                      height={50}
                    />
                  </div>
                )}
              </div>
            </div>
            <div id={Style.btns}>
              <div>
                <button
                  id={Style.book}
                  onClick={() => {
                    window.open(
                      "https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7",
                      ""
                    );
                  }}
                >
                  Book a Demo
                </button>
              </div>
              {/* <div id={Style.login} onClick={()=>{handlelogin()}}><span id={Style.log}>Login</span><span ><img  src={images.Arrow} alt='vector' style={{ transform: `rotate(${rotation}deg)`,transition: 'transform 0.5s ease', }} ></img></span></div>  */}
            </div>
          </div>
          <div className={Style.mobileheadercomponents}>
            <div className={Style.mobilecontents}>
              <div
                className={Style.logo}
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                <Img src={"/imagesnew/brand-logo.svg"} width={50} height={50} />
              </div>
            </div>
            <div className={Style.hambermenu}>
              <div>
                {!isdropped ? (
                  <div
                    onClick={() => {
                      setisdropped(true);
                    }}
                  >
                    <Img
                      src={"/imagesnew/icons/menu.svg"}
                      width={50}
                      height={50}
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setisdropped(false);
                    }}
                  >
                    <Img
                      src={"/imagesnew/icons/close-outline.svg"}
                      width={50}
                      height={50}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {isdropped && <Firstview data={data} />}

        {isOpen && <Solutions data={data1} setIsOpen={setIsOpen} />}
        {isprod && <Products data={data2} setproducts={setIsprod} />}
        {isplatform && <Platform data={data3} setplatform={setplatform} />}
        {isservice && <Services data={data5} setservice={setservice} />}
        {iscompany && <Company data={data4} setcompany={setcompany} />}
      </div>
    </>
  );
}

export default Header;
