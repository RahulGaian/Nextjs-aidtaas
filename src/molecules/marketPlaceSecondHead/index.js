import style from "./index.module.css"
const SecondHeading = ({heading,subheading,description}) => {
  return (
    <>
      <div className={style.featureBoxHeading}>
        <h1>{heading}</h1>
      </div>
      <div className={style.featureBoxSubHeading}>
        <p>{subheading}</p>
      </div>
      <div className={style.featureBoxDescription}>
        <p>{description}</p>
      </div>
    </>
  );
};


export default SecondHeading;