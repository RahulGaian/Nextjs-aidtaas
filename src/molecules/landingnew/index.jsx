"use client"
import React from "react";
import Topsection from "./topsection";
import Section2 from "./secondsectionnew";
import St from "./index.module.css"
const Landingpagenew=()=>{
    return (
        <div className={St.landmain}>
           <Topsection></Topsection>
           <Section2></Section2>
        </div>
    )
}

export default Landingpagenew;
