import React, { useState } from "react";
// import { useState } from "react";
// import "./mobileview.css"
import Style from "./mobileview.module.css"
import ResponsiveSolutions from "./mobviewsolutionspage";
import ResponsiveProducts from "./mobviewproductspage";
import ResponsivePlatform from "./mobviewplatform";
import ResponsiveCompany from "./mobviewcompany";
import images from "../../../constants/images";
import ResponsiveServices from "./mobileviewservice";
// import Button from "../../buttons";
// import Contact from "../../../pages/contact";
function Firstview(data){
    // console.log(data.data[3])

 const [issolutions,setsolutions]=useState(false);
 const [isproducts,setproducts]=useState(false)
 const [isplatform,setplatform]=useState(false)
 const [iscompany,setcompany]=useState(false)
 const [isservice,setservice]=useState(false)
const[page1,setpage1]=useState(true);
const[productspage1,setprodpage]=useState(true);
const[platformpage,setplatformpage]=useState(true);
const[servicepage,setservicepage]=useState(true);
const[companypage,setcompanypage]=useState(true);
 const[isData,setData]=useState(true)

//  const changeRoute=(Route)=>{
//     window.location.href = Route;
// }
return(
    <>
    <div className={Style.maindropdown}>

        <div>
        {isData&&(
      <div className={Style.firstpage} >
      <div id={Style.contents}>
        <div>     
            <ul className={Style.listitems} onClick={()=>{setsolutions(true);setData(false);setpage1(true)}}>
                <div className={Style.content} ><li>Solutions</li></div>
                <div class={Style.rightarrow}><img src={images.RightArrow} alt="rightarrow"/></div>
            </ul>
        </div>
        <div>     
            <ul className={Style.listitems}  onClick={()=>{setproducts(true);setData(false);setprodpage(true)}}>
                <div className={Style.content}><li>Products</li></div>
                <div class={Style.rightarrow}><img src={images.RightArrow} alt="rightarrow"/></div>
            </ul>
        </div>
        <div>     
            <ul className={Style.listitems}  onClick={()=>{setplatform(true);setData(false);setplatformpage(true)}}>
                <div className={Style.content} ><li>Platform</li></div>
                <div class={Style.rightarrow}><img src={images.RightArrow} alt="rightarrow"/></div>
            </ul>
        </div>
        <div>     
            <ul className={Style.listitems} onClick={()=>{setservice(true);setData(false);setservicepage(true)}}>
                <div className={Style.content}><li>Services</li></div>
                <div class={Style.rightarrow}><img src={images.RightArrow} alt="rightarrow"/></div>
            </ul>
        </div>
        <div>     
            <ul className={Style.listitems}  onClick={()=>{setcompany(true);setData(false);setcompanypage(true)}}>
                <div className={Style.content}><li>Company</li></div>
                <div class={Style.rightarrow}><img src={images.RightArrow} alt="rightarrow"/></div>
            </ul>
        </div>       
      </div>
      <div className={Style.hrline}><hr></hr></div>
      <div id={Style.bottomcontent}>
        <div id={Style.book}><button >Book a Demo</button></div>
        {/* <div id={Style.login}><button >Login</button></div> */}
      </div>
    </div>)}
    {issolutions &&(
     <ResponsiveSolutions data={data.data[0]} setData={setData} page1={page1} setpage1={setpage1}/>
     
    )}
    {isproducts &&(
      <div className={Style.menu}>
       <ResponsiveProducts data={data.data[1]} setData={setData} productspage1={productspage1} setprodpage={setprodpage} />
      </div>
    )}
    {isplatform &&(
    
     <ResponsivePlatform data={data.data[2]} setData={setData} platformpage={platformpage} setplatformpage={setplatformpage}/>
    )}
    {iscompany &&(
      <div className={Style.menu}>
      <ResponsiveCompany data={data.data[4]} setData={setData} companypage={companypage} setcompanypage={setcompanypage} />
      </div>
    )}
     { isservice&&(
      <div className={Style.menu}>
      <ResponsiveServices data={data.data[3]} setData={setData} servicepage={servicepage} setservicepage={setservicepage} />
      </div>
    )}
        </div>
    </div>
   

    </>
)
}
export default Firstview;