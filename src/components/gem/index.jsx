import React from "react";
import st from "./index.module.css";
import Img from "../Image";
import { useState } from "react";
import Image from "next/image";
const Gem = () => {
  let data = [
    { name: "", date: "" },
    { name: "Durga Prasad", date: "Feb 2023" },
    { name: "K L Das", date: "Jan 2023" },
    { name: "Gurpreet Gandhi", date: "Mar 2023" },
  ];

  const [active, setActive] = useState(0);
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <div className={st.leftCont}>
          <span id={st.head}>Meet our GEM of the month</span>
          <span id={st.date}>January 2024</span>
          <br />
          <div className={st.emp}>
            <div className={st.empleft}>
              <div id={st.bimg}>
                <Image src="./images/eom/tulika.png" width={0} height={0} />
              </div>
              <span id={st.name}>Tulika Pandey</span>
              <span id={st.design}>Lead UX Designer</span>
            </div>
            <div className={st.empRight}>
              <div className={st.mang}>
                <Image src="./images/eom/kl.png" alt="" width={0} height={0} />
                <div className={st.indiv}>
                  <span id={st.mangName}>K L Das</span>
                  <span id={st.mangMsg}>
                    At Mobius we encourage to explore various skills across
                    domains to drive flourishing growth
                  </span>
                </div>
              </div>
              <div className={st.mang}>
                <Image
                  src="./images/eom/guru.png"
                  alt=""
                  width={0}
                  height={0}
                />
                <div className={st.indiv}>
                  <span id={st.mangName}>Gurpreet Gandhi</span>
                  <span id={st.mangMsg}>
                    Mobius fosters flourishing growth by advocating for the
                    exploration of diverse skills across multiple domains.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={st.rightCont}>
          <div
            className={
              st.rfirst +
              " " +
              (active == 0 || active == 1 ? "" : st.grayscaler)
            }
            onMouseEnter={() => {
              setActive(1);
            }}
            onMouseLeave={() => {
              setActive(0);
            }}
          >
            <Image
              src={"/images/eom/durga.png"}
              alt=""
              width={120}
              height={140}
            ></Image>
          </div>
          <div
            className={
              st.rsecond +
              " " +
              (active == 0 || active == 2 ? "" : st.grayscaler)
            }
            onMouseEnter={() => {
              setActive(2);
            }}
            onMouseLeave={() => {
              setActive(0);
            }}
          >
            <Image
              src={"/images/eom/kl.png"}
              alt=""
              width={180}
              height={200}
              objectFit="cover"
            ></Image>
          </div>
          <div
            className={
              st.rthird +
              " " +
              (active == 0 || active == 3 ? "" : st.grayscaler)
            }
            onMouseEnter={() => {
              setActive(3);
            }}
            onMouseLeave={() => {
              setActive(0);
            }}
          >
            <Image
              src={"/images/eom/guru.png"}
              alt=""
              width={120}
              height={140}
            ></Image>
          </div>

          <h1 className={st.nameAndDate}>
            {active != 0 && data[active]["name"] + " • " + data[active]["date"]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Gem;