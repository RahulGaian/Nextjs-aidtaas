

import React from "react";
import { useState } from "react";
import Style from "./solutions.module.css"
// import Style from "./solutions.module.css"
import Style2 from "./mobileview.module.css"
import images from "../../../constants/images";
import Img from "../../Image";
// import { FiArrowRight } from 'react-icons/fi';

function ResponsiveCompany(props) {
  const data = props.data;
  const setData = props.setData;
  const companypage = props.companypage;
  const setcompanypage = props.setcompanypage;

  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState();
  const [data3, setdata3] = useState([]);
  const [data4, setdata4] = useState();
  // console.log(data3)
  // const[companypage,setcompanypage]=useState(true);
  const [page2, setpage2] = useState(false);
  const [page3, setpage3] = useState(false);
  const [page4, setpage4] = useState(false);
  const [firstpage, setfirstpage] = useState(false);
  const [secondpage, setsecondpage] = useState(false);
  const [thirdpage, setthirdpage] = useState(false);
  // const[isdata4,setisdata4]=useState(false);
  const changeRoute = (Route) => {
    window.location.href = Route;

  }
  return (
    <>
      
      {companypage && (
        <div className={Style2.menu}>
          <div className={Style.page1content}>
            <div className={Style.returnarrow}><img className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow" onClick={()=>{setData(true);setcompanypage(false) }}/></div>
            <div><h5 className={Style.head}>{data.menuItems[0].name}</h5></div>
            <div>
              {data.menuItems[0].list.map((item)=>(
                <ul className={Style.listitems}>
                  <div className={Style.content} 
                    onClick={() => {
                      if (item.article.url !== " ") {
                      changeRoute(item.article.url)
                      setcompanypage(false);}
                    }}
                  ><li>{item.name}</li></div>
                  <div className={Style.rightarrow}
                    onClick={() => {
                    if (item.subitems.items.length > 0) {
                    setdata2(item.subitems)
                    setfirstpage(false);
                    setpage2(true);
                    setpage4(false);
                    setcompanypage(false);
                    }
                    else {
                    setdata1(item.article);
                    setfirstpage(true);
                    setsecondpage(false);
                    setpage4(true);
                    setpage2(false);
                    setcompanypage(false)
                    }
                    }}
                  ><img src={images.RightArrow} alt="rightarrow" /></div>
                </ul>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {page2 && (
        <div className={Style2.menu}>
          <div id={Style.page2content}>
            <div className={Style.returnarrow} onClick={() => { setpage2(false); setcompanypage(true) }}><img  className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow" /></div>
            <div><h5 class={Style.head}>{data2.name}</h5></div>
            <div>
              {data2.items.map((item) => (
                <ul class={Style.listitems}
                ><div className={Style.content} 
                  onClick={() => { changeRoute(item.article.url); setpage2(false) }}><li>{item.name}</li></div>
                  <div class={Style.rightarrow}
                    onClick={() => {
                      if (item.subitems.length > 0) {
                        setdata4(item.subitems)
                        setdata3(item.name);
                        setsecondpage(false);
                        setpage3(true);
                        setpage2(false)
                        setpage4(false);
                      }
                      else {
                        setdata1(item.article);
                        setsecondpage(true);
                        setpage4(true);
                        setpage2(false);
                        setpage3(false)
                      }
                    }}
                  ><img src={images.RightArrow} alt="rightarrow" /></div></ul>
              ))}

            </div>
          </div>
        </div>
      )}

      {page3 && (
        <div className={Style2.menu}>
          <div id={Style.page2content} >
            <div className={Style.returnarrow} onClick={() => {
              setpage3(false); setpage2(true)
            }} ><img className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow" /></div>
            <div><h5 class={Style.head}>{data3}</h5></div>
            <div>
              {data4.map((item) => (
                <ul class={Style.listitems}>
                <div className={Style.content} 
                  onClick={() => { changeRoute(item.content.url); setpage3(false) }}><li>{item.name}</li></div>
                  <div class={Style.rightarrow}

                    onClick={() => { setdata1(item.content); setpage3(false); setpage4(true); setthirdpage(true); }}
                  ><img src={images.RightArrow} alt="rightarrow" /></div></ul>
              ))}

            </div>
          </div>
        </div>
      )}

      {page4 && (
        <div className={Style2.menu}>
          <div id={Style.page3content} >
            <div className={Style.returnarrow} onClick={() => {
              if (firstpage === true) {
                setcompanypage(true); setpage4(false);
                setfirstpage(false); setpage2(false); setpage3(false)
              }
              else if (secondpage === true) {
                setpage2(true); setpage4(false); setcompanypage(false); setpage3(false)
                setsecondpage(false)
              }
              else if (thirdpage === true) {
                setpage3(true); setpage4(false); setpage2(false); setcompanypage(false)
                setthirdpage(false)
              }



            }}><img className={Style2.leftarrowStyle} src={images.leftarrow} alt="returnarrow" /></div>
            <div><h1 class={Style.header}><b>{data1.heading}</b></h1></div>

            <div class={Style.description}>
              {data1.description}
            </div>
            <div class={Style.arrowfolder}><div><h6><b>Learn More</b></h6></div><div class={Style.arrow} onClick={() => { changeRoute(data1.url); setpage3(false) }}><Img  src={"/images/icons/Arrownew.png"}/></div></div>
            <div class={Style.imagecontainer}>
              <Img src={data1.coverImage} alt="finalimage" />
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default ResponsiveCompany;