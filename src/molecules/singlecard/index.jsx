import style from "./index.module.css"
import Image from "next/image"
const changeRoute=(Route)=>{
  window.location.href=Route

}
let SingleApp2 = ({image,heading,content,Route}) => {
    const background = `url("/images/landingmainpagenew/${image}")`;
    
    return(
        <article className={style.card} >
          <div className={style.Imagecontainer}  style={{backgroundImage:background}}>
            <div className={style.Imagecontainer2}>
            <h5 className={style.heading } >{heading}</h5>
            </div>
          </div>
          <div className={style.contentcontainer}>
              <div className={style.content1}>
                 <p>
                     {content}
                  </p>
              </div>
              <div className={style.contentbtns}>
                   <div className={style.prev} onClick={()=>{changeRoute(Route)}}><span><Image className={style.images} src="/images/icons/preview.svg" alt="Preview Icon" width={20} height={16} priority /></span><span className={style.names}>Preview</span></div>
                   <div className={style.prev} onClick={()=>{changeRoute(Route)}}><span><Image className={style.images} src="/images/solutions/External.svg" alt="Preview Icon" width={20} height={16} priority /></span><span className={style.names}>Details</span> </div>
              </div>
          </div>     
        </article>
    )
}

export default SingleApp2;