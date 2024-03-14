"use client"
import React from "react";
import { useState } from "react";
import Image from "next/image";
import st from "./index.module.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import ChangingContent2 from "../awesomeflip";
import CustomerPartners from "../../customerPartners";
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
              <a href="/contact" id={st.btnmain}>
                Contact Us
              </a>
              <a
                id={st.btnmain2}
                href="https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7"
                target="_blank"
              >
                Book a Demo
              </a>


            </div>
          </div>
          <div className={st.imagecont}>
            <Image src={imagessrc[activeSlideIndex]} alt="" fill priority unoptimized></Image>
          </div>
        </div>
      </div>
      <div className={st.fullcont}>
        <div id={st.relations}>
          <div>
            <p id={st.relationtitle}>Our Customers & Partners</p>
          </div>
          <div id={st.relationcont}>
            <CustomerPartners></CustomerPartners>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topsection;
