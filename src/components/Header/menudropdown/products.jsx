import React from "react"
import Style1 from "./menu.module.css"
import Style from "./menu2.module.css"
import { useState } from "react"

import Img from "../../Image"
import images from "../../../constants/images"

import { useRouter } from "next/router"
function Products(props){
      const router = useRouter()
    const data=props.data;
    const setproducts=props.setproducts;
    const [url,setUrl] = useState("");
    const [data2, setdata2] = useState([data[0].menus[0].items[0].subitems[0]]);
    const[data3,setdata3]=useState([]);
    const[data4,setdata4]=useState([]);
    // //console.log(data4)
    const [isdata3,setisdata3]=useState(false)
    const [isdata4,setisdata4]=useState(false);
   
    const changeRoute=(Route)=>{
        // window.location.href = Route;
        
        router.push(Route)
     }
    return(
        <>

        <div className={Style1.menumain}>
        <div className={Style1.menu} onMouseLeave={()=>{setproducts(false)}}>
       
       <div className={Style1.cont1}>
       <div className={Style1.topcont1}>
           <div><h5 className={Style1.head}>{data[0].menus[0].name}</h5></div>
           <div>
           {data[0].menus[0].items.map((item) => (
           <ul className={Style1.listitems} onMouseEnter={()=>{
               setdata2(item.subitems);
               setdata3(item.article);
               setisdata3(true)
               }}>
               <div className={Style1.content}  onClick={()=>{setdata2(item.subitems)}} ><li>{item.name}</li></div>
               <div className={Style1.rightarrow} onClick={()=>{setdata2(item.subitems)}}><Img src={images.RightArrow} alt="rightarrow"/></div>
           </ul>
           ))}
           </div>
           
       </div>
       </div>
       
               <div className={Style1.cont2}>
                <div className={Style1.topcont1}>
                <div> <h5 className={Style1.head}>{data2[0].name}</h5></div>
                   <div>
                       { data2[0].items.map((item)=>(
                           <ul className={Style1.listitems} onMouseEnter={()=>{setdata3(item.content);setdata4(item.subitems);setisdata3(true);setUrl(item.content.url) }}  >
                               <div className={Style1.content} onClick={()=>{changeRoute(item.content.url)}}><li>{item.name}</li></div>
                               <div class={Style1.rightarrow} onClick={()=>{setdata4(item.subitems);}}><Img src={images.RightArrow} alt="rightarrow"/></div>
                           </ul>
                       ))}
                   </div>
                </div>
                 
               </div>
      

       {
       (isdata3)&&(
           <div className={Style1.cont3} onMouseLeave={()=>{setisdata4(false)}}>
              <div className={Style1.topcont1}>
              <div><h1 className={Style1.header}><b>{data3.heading}</b></h1></div>
   
   <div className={Style1.description}>
       {data3.description}
   </div>
   <div className={Style1.arrowfolder} onMouseEnter={() => {  if (data4.length > 0) { setisdata4(true); } else {setisdata4(false);} }} onClick={()=>{changeRoute(url)}}><div><h6><b>Learn More</b></h6></div>
   <div className={Style1.arrow} onClick={()=>{changeRoute(url)}}><Img  src={"/images/icons/Arrownew.png"}/></div>
   </div>
  {isdata4&&(
   <div className={Style.displaydata3} >
       { data4.map((item)=>(
           <ul className={Style.data4listitems} onMouseEnter={()=>{setdata3(item.content)}} ><div className={Style.data4content} onClick={()=>{changeRoute(item.content.url)}}><li>{item.name}</li></div>
           <div class={Style.data4rightarrow} onClick={()=>{changeRoute(item.content.url)}}><Img src={images.RightArrow} alt="rightarrow"/></div>
           </ul>
       ) )}
       </div>
  )}
  
   <div className={Style1.imagecontainer}>
       <Img src={data3.coverImage} alt="finalimage"/>
   </div>
                </div>
           
       
       </div>
       )
       }

{
       ( !isdata3)&&(
           <div className={Style1.cont3} onMouseLeave={()=>{setisdata4(false)}}>
            <div className={Style1.topcont1}>
            <div><h1 className={Style1.header}><b>{data[0].menus[0].items[0].article.heading}</b></h1></div>
   
   <div className={Style1.description}>
   {data[0].menus[0].items[0].article.description}
   </div>
   <div className={Style1.arrowfolder} onMouseEnter={() => {  if (data4.length > 0) { setisdata4(true); } else {setisdata4(false);} }} onClick={()=>{  changeRoute(url)}} ><div><h6><b>Learn More</b></h6></div>
   <div className={Style1.arrow} onClick={()=>{changeRoute(url)}}><Img  src={"/images/icons/Arrownew.png"}/></div>
   </div>
  {isdata4&&(
   <div className={Style.displaydata3} >
       { data4.map((item)=>(
           <ul className={Style.data4listitems} onMouseEnter={()=>{setdata3(item.content)}} ><div className={Style.data4content} onClick={()=>{changeRoute(item.content.url)}}><li>{item.name}</li></div>
           <div class={Style.data4rightarrow} onClick={()=>{changeRoute(item.content.url)}}><Img src={images.RightArrow} alt="rightarrow"/></div>
           </ul>
       ) )}
       </div>
  )}
  
   <div className={Style1.imagecontainer}>
       <Img src={data[0].menus[0].items[0].article.coverImage} alt="finalimage"/>
   </div>

            </div>
         
       
       </div>
       )
       }
    
       
     
       
   </div>
        </div>
       
        </>
    )
}
export default Products





   
// {/* {isdata3&& (
// <div className={Style.cont3} onMouseLeave={()=>{setisdata4(false)}}>
// <div><h1 className={Style.header}><b>{data3.heading}</b></h1></div>

// <div className={Style.description}>
//     {data3.description}
// </div>
// <div className={Style.arrowfolder} onMouseEnter={()=>{setisdata4(true)}} ><div><h6><b>Learn More</b></h6></div><div className={Style.arrow}><Img src={process.env.PUBLIC_URL + "images/icons/arrow-right.svg"} alt="arrowimg"/></div></div>
// {isdata4&&(
// <div className={Style.data4content} >
//     { data4.map((item)=>(
//         <ul className={Style.listitems}><div className={Style.content}><li>{item.name}</li></div>
//         <div class={Style.rightarrow}><Img src={process.env.PUBLIC_URL + "images/icons/Vectorrightarrow.png"} alt="rightarrow"/></div></ul>
//     ) )}
//     </div>
// )}

// <div className={Style.imagecontainer}>
//     <Img src={data3.coverImage} alt="finalimage"/>
// </div>

// </div>
// )
// } */}



// {/* {
// !isdata3 &&(
// <div className={Style.cont3}  >
// <div><h1 className={Style.header}><b>{data[0].menus[0].items[0].article.heading}</b></h1></div>

// <div  className={Style.description}>
// {data[0].menus[0].items[0].article.description}
    
// </div>
// <div className={Style.arrowfolder}><div><h6><b>Learn More</b></h6></div><div className={Style.arrow}><Img src={process.env.PUBLIC_URL + "images/icons/arrow-right.svg"} alt="arrowimg"/></div></div>
// <div className={Style.imagecontainer}>
//     <Img src={data[0].menus[0].items[0].article.coverImage} alt="finalimage"/>
// </div>

// </div>
// )
// } */}


// {/* <div className='hrline'><hr></hr></div>
// <div className={Style.botcont1}>
// <h5 className={Style.head}>{data[0].menus[1].name}</h5>
// <div>
// {data[0].menus[1].items.map((item) => (
// <ul className={Style.listitems} onMouseEnter={()=>{setdata2(item.subitems);setisdata3(true);setdata3(item.article)}} >
// <div className={Style.content}><li>{item.name}</li></div>
// <div class={Style.rightarrow}><Img src={process.env.PUBLIC_URL + "images/icons/Vectorrightarrow.png"} alt="rightarrow"/></div>
// </ul>
// ))}
// </div>

// </div> */}