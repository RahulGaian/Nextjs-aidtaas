import style from "./index.module.css";
import {Image as Img} from "next/image";

let Security = ({heading,content,img}) =>{
    return(
        <div className={style.secContainerSP2} id={style.resources2}>
        <div className={style.secContentContainerSP2}>
          <div className={style.leftdiv2}>
            <h1>Enterprise Grade Trust and Security</h1>
            <h5>Mobius Suite integrates with thousands of Apps, APIs, Content, IT & Infrastructure providers across various domains throughout the globe.</h5>
            <Img id={style.secsymbol} src={"/imagesnew/Landing_logos/Vector_Security.svg"}></Img>
          </div>
        </div>
          <div className={style.rightdiv2}>
            <Img id={style.imagesec} src={"/images/Security/8.png"}></Img>
          </div>
      </div>
    )
}

export default Security;
