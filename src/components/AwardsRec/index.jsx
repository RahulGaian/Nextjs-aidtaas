import Awardswiper from "./awardswiper";
import Style from "./index.module.css"
// import Img from "../Image";
let Awards = () => {
    return(
     <>
     <div className={Style.awardscontainer}>
        <div className={Style.awardscont}>
          <div className={Style.awardscont1}>
              <div className={Style.awardscontheader}>Awards & Recognition</div>
          </div>
          <div className={Style.awardscont2}>
                 <Awardswiper></Awardswiper>
          </div>
     
            
        </div>

     </div>
     </>
    )
}


export default Awards;













 //   <section className={Style.cont +" container mx-auto mt-24 py-20 "}>
      //   <article className={Style.article + "  mx-auto px-4"}>
      //     <h2 className={Style.awardshead}>Awards & Recognition</h2>
      //     <div className={Style.maincont +" grid grid-cols-3 gap-8 justify-between mt-20 items-center "}>
      //       <figure className={Style.figure +" text-center mx-auto award-width"}>
      //         <Img src="images/overview/9.png" className={Style.imagemain} alt=""/>
      //         <figcaption className={Style.caption + " grid grid-rows-2 mt-8"}>
      //           <h5 className="font-bold text-2xl py-2">Product of the Year - NAB Show</h5>
      //           <p className="text-base text-royal-gray-600">2022</p>
      //         </figcaption>
      //       </figure>
      //       <figure className=  {Style.figure +"  text-center  mx-auto"}>
      //         <Img src="images/overview/10.png"  className={Style.imagemain } alt=""/>
  
      //         <figcaption className={Style.caption + " grid grid-rows-2 mt-8"}>
      //           <h5 className="font-bold text-2xl py-2">National Marketplace platform for the broadcasters in USA</h5>
      //           <p className="text-base text-royal-gray-400">2019</p>
      //         </figcaption>
      //       </figure>
      //       <figure className=  {Style.figure +"  text-center mx-auto"}>
      //         <Img src="images/overview/11.png"  className={Style.imagemain} alt=""/>
  
      //         <figcaption className={Style.caption + " grid grid-rows-2 mt-8"}>
      //           <h5 className="font-bold text-2xl py-2">Certified as CMMI Level 3 Company</h5>
      //           <p className="text-base text-royal-gray-600">2017</p>
      //         </figcaption>
      //       </figure>
  
      //     </div>
      //   </article>
      // </section>