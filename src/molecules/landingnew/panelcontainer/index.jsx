

import React,{useState} from "react";
// import Panel from "../../../components/DetailsPanel";
// import AccordianPanel from "../accordianpanel";

import Accordion from "../accordianpanel/accordion";
import St from "./index.module.css"
const Panelcomponent =()=>{
    
    const [num, setNum] = useState(0)
    // setNum(0)
    function Changer(numbers) {
        setNum(numbers)
    }

    const panel1Style = {
        backgroundImage: `url(/images/newbg/mobius_dtass/${num}.png)`,
     
      };
    return (
        <>
        <div className={St.panelcontainer}>
        <div id={St.mainpanel} >
            <div  id={St.panel1} >
                <div style={panel1Style} id={St.panelcont1}>
                <h1 className={St.heading}>Mobius DTaaS</h1>
                <h3 className={St.heading2}>The Platform of Platforms</h3>
                </div>
            </div>
            <div id={St.panel2}>
            <Accordion  data={Changer}></Accordion>
            </div>

        </div>
        </div>
       
        </>
    )
}

export default Panelcomponent;