import React from "react";
import { useState } from "react";
import Style from "./menu.module.css"
import Style2 from "./menu2.module.css"

import Img from "../../Image"
import images from "../../../constants/images";

import { useRouter } from "next/router";
function Platform(props) {
    const data = props.data
      const router = useRouter()
    const setplatform=props.setplatform
    console.log(data)
    const [data3, setdata3] = useState([]);
    // console.log(data3)
    const [isdata3, setisdata3] = useState(false);
    // const [visible, setvisible] = useState(true)

    // console.log(data[0].menuItems[0].list[0].article.coverImage) 
    const changeRoute = (Route) => {
        // window.location.href = Route;
        router.push(Route)
    }
    return (
        <>
             <div className={Style.menumain}>

             <div className={Style.menu} onMouseLeave={()=>{setplatform(false);setisdata3(false)}} >
                <div className={Style.cont1} >

                    <div className={Style.topcont1}>
                        <h5 className={Style.head}>{data[0].menuItems[0].name}</h5>
                           <div>
                           {data[0].menuItems[0].list.map((item) => (
                            <ul className={Style.listitems} onMouseEnter={() => {
                                setisdata3(true)
                                setdata3(item.article);
                            }}  >
                                <div className={Style.content} onClick={() => { changeRoute(item.article.url) }}><li>{item.name}</li></div>
                                <div className={Style.rightarrow} ><img src={images.RightArrow} alt="rightarrow" /></div>
                            </ul>
                        ))}
                           </div>
                            
                        {/* </div> */}
                    </div>
                    <div className={Style.hrline}><hr></hr></div>
                    <div class={Style.botcont1}>
                         <div><h5 class={Style.head} >{data[0].menuItems[3].name}</h5></div>
                        <div>
                            {data[0].menuItems[3].list.map((item) => (
                                <ul className={Style.listitems} onMouseEnter={() => {
                                    setdata3(item.article);
                                    // setisdata3(true);
                                    // setvisible(true)
                                }}  >
                                    <div className={Style.content} onClick={() => { changeRoute(item.article.url) }}><li>{item.name}</li></div>
                                    <div className={Style.rightarrow}><img src={images.RightArrow} alt="rightarrow" /></div>
                                </ul>
                            ))}
                        </div>

                    </div>
                </div>

                    <div className={Style.cont2}>
                        <div className={Style.topcont1}>
                        <div>
              <h5 class={Style.head}>MarketPlaces Built with Mobius</h5>
    </div>
<div className={Style2.marketplace}>
    <div className={Style2.public}>
       <div class={Style2.platformhead}> <h5  >{data[0].menuItems[1].name}</h5></div>
       <div>
       {data[0].menuItems[1].list.map((item) => (
            <ul className={Style2.listitemsplatform} onMouseEnter={() => {
                setdata3(item.article);
                setisdata3(true)
            }}  >
                <div className={Style2.contentplatform} onClick={() => { changeRoute(item.article.url) }}><li>{item.name}</li></div>
                <div className={Style2.rightarrowplatfrom} ><img src={images.RightArrow} alt="rightarrow" /></div>
            </ul>
        ))}
       </div>
       
    </div>
    <div className={Style2.private}>
        <div class={Style2.platformhead}><h5  >{data[0].menuItems[2].name}</h5></div>
<div>
{data[0].menuItems[2].list.map((item) => (
            <ul className={Style2.listitemsplatform} onMouseEnter={() => {
                setdata3(item.article);
            }}  >
                <div className={Style2.contentplatform} onClick={() => { changeRoute(item.article.url) }}><li>{item.name}</li></div>
                <div className={Style2.rightarrowplatform}><img src={images.RightArrow} alt="rightarrow" /></div>
            </ul>
        ))}
</div>
        
    </div>
</div>
                        </div>
                        
                    </div>
        

                {(isdata3) && (
                    <div className={Style.cont3} >
                        <div className={Style.topcont1}>

                        <div><h1 className={Style.header}><b>{data3.heading}</b></h1></div>

<div className={Style.description}>
    {data3.description}
</div>
<div className={Style.arrowfolder}><div><h6><b>Learn More</b></h6></div>
<div className={Style.arrow}><Img  src={"/images/icons/Arrownew.png"}/></div>
</div>
<div className={Style.imagecontainer}>
    <Img src={data3.coverImage} alt="finalimage" />
</div>

                        </div>
                       
                    </div>
                )}
                {(!isdata3) && (
                    <div className={Style.cont3} >
                        <div className={Style.topcont1}>
                        <div><h1 className={Style.header}><b>{data[0].menuItems[0].list[0].article.heading}</b></h1></div>

<div className={Style.description}>
    {data[0].menuItems[0].list[0].article.description}
</div>
<div className={Style.arrowfolder}><div><h6><b>Learn More</b></h6></div>
<div className={Style.arrow}><Img  src={"/images/icons/Arrownew.png"}/></div>
</div>
<div className={Style.imagecontainer}>
    <Img src={data[0].menuItems[0].list[0].article.coverImage} alt="finalimage" />
</div>
                        </div>
                       
                    </div>
                )}

            </div>

            </div>


            
        </>
    )
}

export default Platform;