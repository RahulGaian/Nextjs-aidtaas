import Style from "./index.module.css";
import Img from "../Image";

let Values = () => {
  return (
    <section className={Style.sectionvaluesmain}>
      <div className={Style.maincontainer + " mt-5 mb-12"}>
        <div>
          {" "}
          <h1 className={Style.heading}>Our Values</h1>
        </div>
        <div className={Style.cont}>
          <div className={"flex flex-col items-center justify-between gap-4"}>
            <Img src={"/images/overview/study_integrity.svg"}></Img>
            <h6>Integrity</h6>
          </div>
          <div className={"flex flex-col items-center justify-between gap-4"}>
            <Img src={"/images/overview/4.svg"}></Img>
            <h6>Passion</h6>
          </div>
          <div className={"flex flex-col items-center justify-between gap-4"}>
            <Img src={"/images/overview/carehand_empathy.svg"}></Img>
            <h6>Empathy</h6>
          </div>
          <div className={"flex flex-col items-center justify-between gap-4"}>
            <Img src={"/images/overview/2.svg"}></Img>
            <h6>Innovation</h6>
          </div>
          <div className={"flex flex-col items-center justify-between gap-4"}>
            <Img src={"/images/overview/3.svg"}></Img>
            <h6>Longtermism</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
