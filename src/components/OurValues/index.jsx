import Style from "./index.module.css";
// import Image from "../Image";
import Image from "next/image";

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
            <Image
              src={"/images/overview/study_integrity.svg"}
              width={100}
              height={100}
            ></Image>
            <h6>Integrity</h6>
          </div>
          <div className={"flex flex-col items-center justify-between gap-4"}>
            <Image
              src={"/images/overview/4.svg"}
              width={100}
              height={100}
            ></Image>
            <h6>Passion</h6>
          </div>
          <div className={"flex flex-col items-center justify-between gap-4"}>
            <Image
              src={"/images/overview/carehand_empathy.svg"}
              width={100}
              height={100}
            ></Image>
            <h6>Empathy</h6>
          </div>
          <div className={"flex flex-col items-center justify-between gap-4"}>
            <Image
              src={"/images/overview/2.svg"}
              width={100}
              height={100}
            ></Image>
            <h6>Innovation</h6>
          </div>
          <div className={"flex flex-col items-center justify-between gap-4"}>
            <Image
              src={"/images/overview/3.svg"}
              width={100}
              height={100}
            ></Image>
            <h6>Longtermism</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
