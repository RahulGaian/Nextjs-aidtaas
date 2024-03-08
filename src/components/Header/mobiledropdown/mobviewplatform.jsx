
import React from "react";
import { useState } from "react";
import Style from "./solutions.module.css"
import Style2 from "./mobileview.module.css"
import Style3 from "./platforms.module.css"
import Img from "../../Image";
import images from "../../../constants/images";
// import { FiArrowRight } from 'react-icons/fi';

function ResponsivePlatform (props){
    const data=props.data
    const setData=props.setData
   const platformpage=props.platformpage
   const setplatformpage=props.setplatformpage
    const [data2,setdata2]=useState()
    // console.log(data2)
    const [data4,setdata4]=useState([]);
    // const[page1,setpage1]=useState(true);
    const[page2,setpage2]=useState(false);
    const[page3,setpage3]=useState(false);
    const[firstpage,setfirstpage]=useState(false);
    const[secondpage,setsecondpage]=useState(false);
      // const[isdata4,setisdata4]=useState(false);
      const changeRoute=(Route)=>{
        window.location.href=Route;
      
     }
     return(
        <>
        {
          platformpage&&(
              <div className={Style2.menu} >
              <div className={Style.page1content}>
              <div className={Style3.topcont}>
              <div className={Style.returnarrow}><img className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow"  onClick={()=>{setData(true);setplatformpage(false);}}/></div>
                  <div><h5 className={Style.head}>{data.menuItems[0].name}</h5></div>
                  
                  <div> {data.menuItems[0].list.map((item) => (
                  <ul className={Style.listitems}
                   >
                      <div className={Style.content}  
                      onClick={()=>{
                     changeRoute(item.article.url)
                     setplatformpage(false)
                      }}><li>{item.name}</li></div>
                      <div className={Style.rightarrow} onClick={()=>{
                         setdata4(item.article);
                         setpage3(true);
                         setfirstpage(true);
                         setsecondpage(false)
                         setplatformpage(false)
                      }}><img src={images.RightArrow} alt="rightarrow"/></div>
                  </ul>
                  ))}
                  </div>
                  
              </div>
              <div id={Style.hrline}><hr></hr></div>
              <div className={Style3.botcont}>
              <div><h5 className={Style.head}>Marketplaces</h5></div>
              <div>
              <ul className={Style.listitems} 
                       >
                      <div className={Style.content} onClick={()=>{setdata2(data.menuItems[1]);console.log(data.menuItems[1]);setpage2(true);setplatformpage(false)}}><li>Public Marketplaces</li></div>
                      <div className={Style.rightarrow} onClick={()=>{setdata2(data.menuItems[1]);console.log(data.menuItems[1]);setpage2(true);setplatformpage(false)}}><img src={images.RightArrow} alt="rightarrow"/></div>
                  </ul>
                  <ul className={Style.listitems  +" " + Style3.listitems}
                       >
                      <div className={Style.content} onClick={()=>{setdata2(data.menuItems[2]);setpage2(true);setplatformpage(false)}}><li>Private Marketplaces</li></div>
                      <div className={Style.rightarrow} onClick={()=>{setdata2(data.menuItems[2]);setpage2(true);setplatformpage(false)}}><img src={images.RightArrow} alt="rightarrow"/></div>
                  </ul>
              </div>
              {/* <br /> */}
             <div id={Style.hrline}><hr></hr></div>
               <div>
               <ul className={Style.listitems  +" " + Style3.listitems1} 
                       >
                      <div className={Style.content} onClick={()=>{setdata2(data.menuItems[3]);setpage2(true);setplatformpage(false)}}><li>First Principles</li></div>
                      <div className={Style.rightarrow} onClick={()=>{setdata2(data.menuItems[3]);setpage2(true);setplatformpage(false)}}><img src={images.RightArrow} alt="rightarrow"/></div>
                  </ul>
               </div>
              </div>
              </div>
              


    </div>
          )
        }
     
    {page2 &&(
      <div className={Style2.menu}>

                        <div id={Style.page2content} >
                        <div className={Style.returnarrow}><img className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow" onClick={()=>{setplatformpage(true);setpage2(false)}}/></div>
                    <h5 class={Style.head}>{data2.name}</h5>
                    <div>
                    { data2.list.map((item)=>(
                    <ul class={Style.listitems}  
                    //onClick={()=>{setdata3(item.content);setpage2(false);setpage3(true)}}
                    ><div className={Style.content} onClick={()=>{
                      // changeRoute(item.article.url);setpage2(false)
                      setdata4(item.article);setpage2(false);setpage3(true);setsecondpage(true);setfirstpage(false)
                       }}><li>{item.name}</li></div>
                    <div class={Style.rightarrow}
                    onClick={()=>{setdata4(item.article);setpage2(false);setpage3(true);setsecondpage(true);setfirstpage(false)}}
                    ><img src={images.RightArrow} alt="rightarrow"/></div></ul>
                    ) )}

                    </div>
                    </div>
      </div>
    )}
      
      {page3&& (
                     <div className={Style2.menu}>
                     <div id={Style.page3content} >
                     <div className={Style.returnarrow}><img className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow"
                      onClick={()=>{
                        if(firstpage===true && secondpage===false){
                          setpage3(false);setplatformpage(true)
                        }
                        else if (secondpage===true && firstpage===false){
                           setpage3(false);setpage2(true)
                        }
                       
                     }}
                     /></div>
                                   <div><h1 class={Style.header}><b>{data4.heading}</b></h1></div>
                           
                                   <div class={Style.description}>
                                       {data4.description}
                                   </div>
                                   <div class={Style.arrowfolder} onClick={()=>{changeRoute(data4.url);setpage3(false)}}><div><h6><b>Learn More</b></h6></div><div class={Style.arrow} ><Img  src={"/images/icons/Arrownew.png"}/></div></div>
                                   <div class={Style.imagecontainer}>
                                       <Img src={data4.coverImage} alt="finalimage"/>
                                   </div>
                               
                               </div>
                                       </div>
                )
                }
    
        
        </>
     )
}

export default ResponsivePlatform;