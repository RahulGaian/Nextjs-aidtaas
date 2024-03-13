import style from "./index.module.css"
const SecondHeading = ({data}) => {
  return (
    <>
      <div className={style.featureBoxHeading}>
        <h1>{data.heading}</h1>
      </div>
      <div className={style.featureBoxSubHeading}>
        <p>{data.subheading}</p>
      </div>
      <div className={style.featureBoxDescription}>
        <p>{data.description}</p>
      </div>
    </>
  );
};


export default SecondHeading;