import Link from "next/link";
import styles from "./index.module.css";
// import LottieAnimation from "../../components/LottieAnimations";
import LottieAnimation from "../../components/LottieAnimations/index";
// import data1 from "../../animations/404.";
import data1 from "../../animations/404.json";
function ErrorPage() {
  return (
    <div className={styles.errorpage}>
      <div className={styles.errorpagecontainer}>
        <div className={styles.errorpageimgcont}>
          {/* <img
            src="/imagesnew/ErrorPage/404 1.png"
            alt=""
            className="errorpageimg"
          /> */}
          <LottieAnimation
            data={data1}
            className={styles.errorpageimg}
          ></LottieAnimation>
        </div>
        <div className={styles.errorpagetextcontainer}>
          <div className={styles.errorpagetext}>
            {/* <span>404</span> */}
            <span>Page not found</span>
          </div>
          <div className={styles.errorpagebtncont}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <button type="button" className={styles.errorpagebtn}>
                Goto Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ErrorPage;
