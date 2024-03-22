import Image from "next/image";
import st from "./index.module.css";
import Link from "next/link";

const PlatformBanner2 = ({ bannerData }) => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <div className={st.maincont}>
          <div className={st.leftcont}>
            <h1>{bannerData.heading}</h1>
            <h3>{bannerData.subheading}</h3>
            <p>{bannerData.description}</p>
            <Link
              href="https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7"
              target="_blank"
              rel="noopener noreferrer"
              id={st.link}
            >
              <button>Book a demo</button>
            </Link>
          </div>
          <div className={st.rightcont}>
            <Image
              src={bannerData.imageUrl}
              alt="Banner"
              width={550}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformBanner2;
