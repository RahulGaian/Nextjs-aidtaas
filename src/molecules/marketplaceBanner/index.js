import Link from "next/link";
import st from "./index.module.css";
import Image from "next/image";

const MarketPlaceBanner = ({ bannerData }) => {
    const heading = bannerData.heading;
    const splitHeading = heading.length > 16 ? heading.match(/.{1,16}( |$)/g).join("\n") : heading;

    return (
        <div className={st.container}>
            <div className={st.contentContainer}>
                <h1>{splitHeading}</h1>
                <div className={st.subContainer}>
                    <div className={st.leftCont}>
                        <h2>{bannerData.subheading}</h2>
                        <p>{bannerData.description}</p>
                        <Link href="https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7" target="_blank" rel="noopener noreferrer" id={st.link}>
                            <button>Book a demo</button>
                        </Link>
                    </div>
                    <div className={st.rightCont}>
                        <Image src={bannerData.imageUrl} alt="Banner" width={400} height={400} priority></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketPlaceBanner;