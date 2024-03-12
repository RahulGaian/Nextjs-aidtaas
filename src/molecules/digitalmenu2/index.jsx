"use client"
import Style from "./index.module.css" 
import { useState } from "react";
import {default as Img} from "next/image"

function DigitalMenu2(index = 0) {
  const menu = [
    {
      name: "Pascal Intelligence (PI)",
      image: "/imagesnew/Landing_logos/pi.svg",
      heading: "AI Powered Predictive Analysis",
      active:false,
      description:
        "PI-Pascal Intelligence is a powerful multi-tenant, cloud-native SaaS tool that empowers enterprises to make data-driven decisions and turn data into actionable insights. It provides low-code tools for data visualization, contextualization, and targeting, along with all three layers of big data processing - ingest, process, and serve.",
    },
    {
      name: "BoltzmannBot (BoB)",
      heading: "BoltzmannBot (BoB)",
      image: "/imagesnew/Landing_logos/BoBWorkflows.png",
      active:false,
      description:
        "BoB is a cutting-edge API automation and business process orchestration platform that streamlines and automates complex workflows across industries. BoB leverages the power of advanced algorithms and machine learning to deliver efficient, scalable, and reliable automation solutions.",
    },
    {
      name: "Monet",
      heading: "Monet",
      image: "/imagesnew/Landing_logos/monet.svg",
      active:false,
      description:
        "Monet is a low-code application development multi-tenant SaaS tool that enables businesses to create a multitude of applications in various B2X2X models, making it an ideal solution for any enterprise looking to digitize and create innovative digital experiences.",
    },
    {
      name: "Vinci",
      heading: "Vinci",
      image: "/imagesnew/Landing_logos/Vinci.png",
      active:false,
      description:
        "Vinci is a cloud-native, multi-tenant SaaS tool that provides omnichannel engagement as a service. The platform empowers users to create real-time engagements that connect them with customers, employees, partners, and stakeholders in real-time, driving unbeatable ROI.",
    },
    {
      name: "Holacracy",
      heading: "Holacracy",
      active:false,
      image: "/imagesnew/Landing_logos/marketplace.svg",
      description:
        "Holacracy is a cutting-edge, multi-tenant SaaS platform that offers a collaborative marketplace as a service. The platform provides businesses with the raw materials for digital transformation, including technology providers, content providers, infrastructure providers, and monetization partners. Holacracy is the ultimate destination for businesses looking to take their phygital transformation to the next level and drive success through collaborative partnerships.",
    },
  ];
    
    const [digital,setDigital] = useState("0");
    const [heading,setHeading] = useState(menu[0].heading);
    const [content,setContent] = useState(menu[0].description)
    const [state_active,setActive] = useState({
     0:true,
      1:false,
      2:false,
      3:false,
      4:false
    })
   


    // Data

  const stateChanger = (id) => {
      setDigital(id);
      setHeading(menu[id].heading);
      setContent(menu[id].description);
      setActive(prevState => ({
        ...prevState,
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        [id]: true
      }));
  }
    function list(item,id,active){
        return(
            <li className={Style.List} key={id} onClick={()=>{stateChanger(id)}} >
              <div className={state_active[id]?Style.active_li:Style.notactive}>
                  {item}
                </div>
            </li>
        )
    }
    let ele = menu.map((i,id)=>{return list(i.name,id,i.active);})


 

    return (
        <>
            <div className={Style.wholebacklandingpage }>
            <div className={Style.contmain}>
            <div>
                  <div className={Style.cont1}>
                      <h2 className={Style.Heading }>The Mobius DTaaS Platform</h2>
                      <h2 className={Style.secondH}> The One Platform for End-to-End Digital Transformation</h2>

                  </div>
                </div>

                <div className={Style.cont2}>
                  <div className={Style.cont2section1}>
                  <div className={Style.Li}>
                            {ele}    
                      </div>          
                      <div className={Style.digitalcontmain} style={{}}>
                              <h2 className={Style.DigitalHeading}>{heading}</h2>
                              <h2 className={Style.DigitalContent}>{content}</h2>
                      </div>
                  </div>
                      
                      <div className={Style.cont2section2}>
                          <div><Img priority fill src={menu[digital].image} ></Img></div>
                      </div>             
                </div>
            </div>
               
            
            </div>
        
        </>
    )


}
export default DigitalMenu2;
