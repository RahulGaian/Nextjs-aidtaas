import React from "react";
import { useState } from "react";
import Style from "./solutions.module.css"
import Style2 from "./mobileview.module.css"
import Img from "../../Image"
import images from "../../../constants/images";
function ResponsiveSolutions (props){
    const data=props.data
    const setData=props.setData
    
    const [data2, setdata2] = useState([]);
    const[data3,setdata3]=useState([]);
    const page1 =props.page1
    const setpage1=props.setpage1
    const[page2,setpage2]=useState(false);
    const[page3,setpage3]=useState(false)
    const changeRoute=(Route)=>{
        window.location.href = Route;
    }
    return(
        <>
        {
            page1&&(
                <div className={Style2.menu} >
                    {/* <h1>rahul is here</h1> */}
                    <div className={Style.page1content}>
                    <div className={Style.topcont}>
            <div className={Style.returnarrow}><img className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow" onClick={()=>{setData(true);setpage1(false)}}/></div>
                <div><h5 class={Style.head}>{data.menus[0].name}</h5></div>
                <div>
                {data.menus[1].items.map((item) => (
                <ul className={Style.listitems}>
                    <div className={Style.content} onClick={()=>{ setdata2(item.subitems);
                        setpage1(false)
                        setpage2(true)}}><li>{item.name}</li></div>
                    <div class={Style.rightarrow}
                     onClick={()=>{
                        setdata2(item.subitems);
                        setpage1(false)
                        setpage2(true)
                    }}
                     ><img src={images.RightArrow} alt="rightarrow"/></div>
                </ul>
                ))}
                </div>
                
            </div>
            <div id={Style.hrline}><hr></hr></div>
            <div className={Style.botcont} >
            <div><h5 class={Style.head2}>{data.menus[1].name}</h5></div>
            <div>
            {data.menus[0].items.map((item) => (
                    <ul className={Style.listitems}
                        >
                       <div className={Style.content} onClick={()=>{   
                        setdata2(item.subitems);
                        setpage1(false)
                        setpage2(true)}}><li>{item.name}</li></div>
                    <div class={Style.rightarrow} 
                     onClick={()=>{
                        setdata2(item.subitems);
                        setpage1(false)
                        setpage2(true)
                     }}
                    ><img src={images.RightArrow} alt="rightarrow"/></div>
                        </ul>
                    ))}
            </div>
            
            </div>
                    </div>
    
            </div>
            )
        }
            
            {
                page2&&(
                    <div className={Style2.menu}>
                        <div id={Style.page2content} >
                            <div className={Style.returnarrow}><img className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow" onClick={()=>{setpage1(true);setpage2(false)}}/></div>
                    <div><h5 class={Style.head}>{data2[0].name}</h5></div>
                    <div>
                    { data2[0].items.map((item)=>(
                        <ul class={Style.listitems}  
                        //onClick={()=>{setdata3(item.content);setpage2(false);setpage3(true)}}
                        ><div className={Style.content} onClick={()=>{setdata3(item.content);setpage2(false);setpage3(true)}}><li>{item.name}</li></div>
                        
                    <div class={Style.rightarrow}
                    onClick={()=>{setdata3(item.content);setpage2(false);setpage3(true)}}
                    ><img src={images.RightArrow} alt="rightarrow"/></div></ul>
                    ) )}
                    </div>
                    </div>
                    </div>
                    
                )
            }

            {
                page3&&(
                    <div className={Style2.menu}>
                        <div id={Style.page3content} >
                            <div className={Style.returnarrow}><img className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow" onClick={()=>{setpage2(true);setpage3(false)}}/></div>
                            <div><h1 class={Style.header}><b>{data3.heading}</b></h1></div>
                            <div class={Style.description}>
                                {data3.description}
                            </div>
                            <div class={Style.arrowfolder} onClick={()=>{changeRoute(data3.url);setpage3(false)}}><div><h6><b>Learn More</b></h6></div><div class={Style.arrow} ><Img  src={"/images/icons/Arrownew.png"}/></div></div>
                            <div class={Style.imagecontainer}>
                                <Img src={data3.coverImage} alt="finalimage"/>
                            </div>
            
                        </div>
                    </div>
                  
                )
            }
            
          
            
        
        </>
    )
}

export default ResponsiveSolutions;