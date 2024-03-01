import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

const SeeAlso = ({ seeAlsoData }) => {
  const { name, desc, link } = seeAlsoData;

  return (
    <section className={styles.seeAlsoContainer}>
      <h3>See Also</h3>
      <h1>{name}</h1>
      <p>{desc}</p>
      <Link href={`/platform/${link}`} passHref legacyBehavior>
        <a>
          <Image
            src={"/images/platform/PascalIntelligence/arrowPinkRight.png"}
            alt="arrowImage"
            width={30}
            height={20}
          />
        </a>
      </Link>
    </section>
  );
};

export default SeeAlso;
