import st from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

const SolutionPagePS = ({ problemData }) => {
  return (
    <div className={st.psContainer}>
      <div className={st.psContentContainer}>
        <div className={st.leftcont}>
          <Image
            src={problemData.imageUrl}
            width={400}
            height={400}
            alt=""
            priority
          />
        </div>
        <div className={st.rightcont}>
          <h1>{problemData.heading}</h1>
          <p>{problemData.description}</p>
          <Link
            href="https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7"
            target="_blank"
            rel="noopener noreferrer"
            id={st.link}
          >
            <button>Speak to an expert</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionPagePS;
