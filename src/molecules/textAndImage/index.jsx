// import { useEffect,useState } from "react";
// import "./index.css"
import st from "./index.module.css"
import Image from "next/image"
const TextandImage = ({text1,text2,img,side}) => {

        // const [side,setSide] = useState("right")
        // let display_width = window.innerWidth;
        // // if(display_width<500) setSide("right") 
        // // if(display_width>500) setSide("left")
    if(side ==="right") {

            return( 
            <div className={st.TextImg}>

          
                <div className={st.contright + " pt-8"} >
                    <div className={st.cont1}>
                        <h3 className={st.T1}>{text1}</h3>
                        <p className={st.T2}>{text2}</p>
                    </div>
                    <div className={st.cont2}>
                    <Image priority fill src={img} alt="" unoptimized />
                    </div>
                </div>
            </div>
        )
    
    }
    if (side === "left"){
        return( 
            <div className={st.TextImg}>

            
            <div className={st.contleft + " pt-8"}  >
                <div className={st.cont2} >
                <Image priority fill src={img} alt="" />

                </div>
                
                <div className={st.cont1}>
                <h3 className={st.T1}>{text1}</h3>
                        <p className={st.T2}>{text2}</p>
                </div>
            </div>
        </div>
    );
  }
  if (side === "left") {
    return (
      <div className={st.TextImg}>
          <div className={st.contleft + " pt-8"}>
            <div className={st.cont2}>
              <Img priority fill src={img} />
            </div>

            <div className={st.cont1}>
              <h3 className={st.T1}>{text1}</h3>
              <p className={st.T2}>{text2}</p>
            </div>
        </div>
      </div>
    );
  }
};

export default TextandImage;
