import style from "./index.module.css";
import Button from "../../components/buttons";
let ProductExp = ({ heading, content, btn, url, open }) => {
  return (
    <section className={style.pre}>
      <div className={style["pre-con"]}>
        <div>
          <div>
            <h1 className={style["pre-heading"]}>{heading}</h1>
          </div>
          <div>
            <h1 className={style['pre-content']}>{content} </h1>
          </div>
          <div>
            {" "}
            <Button
              text={btn}
              filled={true}
              url={url}
              openInNewTab={open}
              className={style.buttonbottom}
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductExp;
