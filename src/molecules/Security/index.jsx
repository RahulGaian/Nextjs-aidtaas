import "./index.css";
import {Image as Img} from "next/image";

let Security = ({heading,content,img}) =>{
    return(
        <div className="secContainerSP2" id="resources2">
        <div className="secContentContainerSP2">
          <div className="leftdiv2">
            <h1>Enterprise Grade Trust and Security</h1>
            <h5>Mobius Suite integrates with thousands of Apps, APIs, Content, IT & Infrastructure providers across various domains throughout the globe.</h5>
            <Img id="secsymbol" src={"/imagesnew/Landing_logos/Vector_Security.svg"}></Img>
          </div>
        </div>
          <div className="rightdiv2">
            <Img id="imagesec" src={"/images/Security/8.png"}></Img>
          </div>
      </div>
    )
}

export default Security;
