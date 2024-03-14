"use client";
import React from "react";
import Topsection from "./topsection";
import Section2 from "./secondsectionnew";
import St from "./index.module.css";
const Landingpagenew = () => {
  return (
    <div className={St.landmain}>
      <div className={St.bg_blueBlob1}>
        <div className={St.bg_pink_color_1}>
          <div className={St.bg_blueBlob2}>
            <Topsection></Topsection>
            <Section2></Section2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpagenew;
