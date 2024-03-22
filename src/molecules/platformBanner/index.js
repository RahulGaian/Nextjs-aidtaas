import Image from "next/image";
import st from "./index.module.css";
import Link from "next/link";

const PlatformBanner1 = ({ bannerData }) => {
  let imageClass = "";

  if (bannerData.heading === "Pascal Intelligence") {
    imageClass = st.piImage;
  } else if (bannerData.heading === "BoltzmanBot") {
    imageClass = st.bobImage;
  }
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <h1>{bannerData.heading}</h1>
        <div className={st.maincont}>
          <div className={st.leftcont}>
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
              className={imageClass}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformBanner1;