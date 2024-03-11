import React from "react";
import style from "./index.module.css"
let  Prebuilt =()=>{
   return(
    <>
        <section className={style.panelsection} style={{ position: "relative" }}>
          <div className={style.mainpanel} >
              <h3 className={style.prebuilthead}>
                Prebuilt Integrations with thousands of Apps & Workflows
              </h3>
              <p className={style.prebuiltdesc}>
                Mobius Suite integrates with thousands of Apps, APIs, Content, IT
                & Infrastructure providers across various domains throughout the
                globe
              </p>

          </div>

        </section>
    </>
   )
}

export default Prebuilt;