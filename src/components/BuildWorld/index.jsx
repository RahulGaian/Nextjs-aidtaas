// import Img from "../Image";
// import Button from "../buttons";
import Style from "./index.module.css";
let BuildWord = () => {
  const changeRoute = (Route) => {
    window.location.href = Route;
  };
  return (
    <section className={Style.sectionmain + " pt-25 mb-25"}>
      <article className={Style.article}>
        <div className={Style.maincontent}>
          <div>
            <h2 className={Style.buildhead}>Build for the World?</h2>
            <h1 className={Style.Joinus}>Join us</h1>
          </div>
          <div>
            <div className={Style.content}>
              Join our talented team of artists, hackers & visionaries building
              world-changing products from India
            </div>
            <div
              className={Style.openingsbutton}
              onClick={() => {
                changeRoute("/careeropenings");
              }}
            >
              View Openings
            </div>
            {/* <Button text={"View Openings"} filled={true}></Button> */}
          </div>
        </div>
      </article>
    </section>
  );
};
export default BuildWord;

/* <div className={Style.imagecontent + " flex justify-center items-center overflow-hidden mt-20 "}>
          <a className="mx-6" href="/">
            <article className={Style.images+ " min-w-96 rounded-3xl text-right"}>
              <Img className="w-full" src="images/teams/01.png" alt="" />
            </article>
          </a>
          <a className="mx-6" href="/">
            <article className={Style.images+" min-w-96 rounded-3xl"}>
              <Img className="w-full" src="images/teams/02.png" alt="" />
            </article>
          </a>
          <a className="mx-6" href="/">
            <article className={Style.images+" min-w-96 rounded-3xl"}>
              <Img className="w-full" src="images/teams/03.png" alt="" />
            </article>
          </a>
          <a className="mx-6" href="/">
            <article className={Style.images+" min-w-96 rounded-3xl"}>
              <Img className="w-full" src="images/teams/04.png" alt="" />
            </article>
          </a>
        </div> */
