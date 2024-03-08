
import React from "react";
import { useState } from "react";
import Style from "./solutions.module.css"
import Style2 from "./mobileview.module.css"
import Img from "../../Image"
import images from "../../../constants/images";
// import { FiArrowRight } from 'react-icons/fi';
// import Style1 from "./mobileview.module.css"
function ResponsiveProducts(props) {

    const data = props.data
    const setData=props.setData
    const productspage1 =props.productspage1
    const setprodpage=props.setprodpage
    const [data2, setdata2] = useState([data.menus[0].items[0].subitems[0]]);
    const [data3, setdata3] = useState([]);
    const [data4, setdata4] = useState([]);
    const [data4name, setdata4name] = useState();
    const [page2, setpage2] = useState(false)
    // const [page1, setpage1] = useState(true)
    const [page3, setpage3] = useState(false)
    const [page4, setpage4] = useState(false)
    // const[data3,setdata3]=useState([]);
    // const [isdata3,setisdata3]=useState(false)
    const changeRoute = (Route) => {
        window.location.href = Route;
    }
    return (
        <>

            
{productspage1 && (
    <div className={Style2.menu}>
        <div className={Style.page1content}>
        <div className={Style.returnarrow}><img className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow"  onClick={()=>{setData(true);setprodpage(false)}}/></div>
            <div><h5 className={Style.head}>{data.menus[0].name}</h5></div>
            <div>
                {data.menus[0].items.map((item) => (
                <ul className={Style.listitems}>
                    <div className={Style.content} 
                        onClick={() => {
                            if (item.article.url !== " ") {
                            // changeRoute(item.article.url)
                            // setprodpage(false)
                            setdata2(item.subitems)
                            setprodpage(false)
                            setpage2(true)
                            }
                        }}
                    ><li>{item.name}</li>  
                    </div>
                    <div className={Style.rightarrow}
                        onClick={() => {
                        setdata2(item.subitems)
                        setprodpage(false)
                        setpage2(true)
                        }}
                    ><img src={images.RightArrow} alt="rightarrow"/>
                    </div>
                </ul>
                ))}
            </div>

        </div>
    </div>
)}
            



            {page2 && (
                <div className={Style2.menu}>
                    <div id={Style.page2content} >
                    <div className={Style.returnarrow}><img className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow" onClick={()=>{setprodpage(true);setpage2(false)}}/></div>
                        <div><h5 class={Style.head}>{data2[0].name}</h5></div>
                        <div>
                            {data2[0].items.map((item) => (
                                <ul class={Style.listitems}>
                                    <div className={Style.content} onClick={() => {  setdata4name(item.name); setdata4(item.subitems); setpage4(true); setpage2(false) }}>
                                        <li>{item.name}</li>
                                    </div>
                                    <div class={Style.rightarrow} onClick={() => { setdata4name(item.name); setdata4(item.subitems); setpage4(true); setpage2(false) }}>
                                        <img src={images.RightArrow} alt="rightarrow" />
                                    </div>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {page4 && (
                <div className={Style2.menu}>
                    <div id={Style.page2content} >
                    <div className={Style.returnarrow}><img className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow" onClick={()=>{setpage4(false);setpage2(true)}}/></div>
                        <div><h5 class={Style.head}>{data4name}</h5></div>
                        <div>
                            {data4.map((item) => (
                                <ul class={Style.listitems} >
                                    <div className={Style.content} onClick={() => { setdata3(item.content); setpage4(false); setpage3(true) }} >
                                        <li>{item.name}</li>
                                    </div>
                                    <div class={Style.rightarrow} onClick={() => { setdata3(item.content); setpage4(false); setpage3(true) }}>
                                        <img src={images.RightArrow} alt="rightarrow" />
                                    </div>
                                </ul>
                            ))}

                        </div>
                    </div>
                </div>
            )}

            {page3 && (
                <div className={Style2.menu}>
                    <div id={Style.page3content} >
                    <div className={Style.returnarrow}><img className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow" onClick={()=>{setpage3(false);setpage4(true)}}/></div>
                        <div>
                            <h1 class={Style.header}><b>{data3.heading}</b></h1>
                        </div>
                        <div class={Style.description}>
                            {data3.description}
                        </div>
                        <div class={Style.arrowfolder}>
                            <div>
                                <h6><b>Learn More</b></h6>
                            </div>
                            <div class={Style.arrow} onClick={() => { changeRoute(data3.url); setpage3(false) }}><Img  src={"/images/icons/Arrownew.png"}/></div>
                        </div>
                        <div class={Style.imagecontainer}>
                            <Img src={data3.coverImage} alt="finalimage" />
                        </div>

                    </div>
                </div>
            )}

        </>
    )
}

export default ResponsiveProducts;