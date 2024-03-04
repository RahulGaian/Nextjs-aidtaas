import styles from "./index.module.css";
// import SolutionPageSecurity from "../SolutionPageSecurity/SolutionPageSecurity";

const YouMayAlsoLike = ({ likeData }) => {
    return (
      <div className={styles.likeContainerSL} id={styles.alsolike}>
        <div className={styles.likeContentContainerSL}>
          <h2>You may also like..</h2>
          <h5>Related products to Mobius Smart City Solutions</h5>
          <div className={styles.blockContainer}>
            {likeData.map((item, index) => (
              <div key={index} className={styles.likeprod}>
                <div className={styles.leftdiv}>
                  <img src={item.imageUrl} alt="likeImg" />
                </div>
                <div className={styles.rightdiv}>
                  <h3>{item.heading}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default YouMayAlsoLike;
