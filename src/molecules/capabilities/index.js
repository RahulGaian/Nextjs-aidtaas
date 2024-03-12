import Image from "next/image";
import styles from "./index.module.css";

const SolutionPageCapabilities = ({ data }) => {
  //   console.log(data);
  return (
    <div className={styles.capcontainer} id="capabilities">
      <div className={styles.capContentContainer + " " + styles.bgbackCap}>
        <h1>Capabilities</h1>
        <div className={styles.itemcontainer}>
          {data.map((item, index) => (
            <div key={index}>
              <div>
                <Image
                  src={item.imageUrl}
                  alt="cimage"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h2>{item.heading}</h2>
              </div>
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionPageCapabilities;
