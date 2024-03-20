import Link from "next/link";
import st from "./index.module.css";
import Image from "next/image";

const ProductBanner = ({bannerData}) => {
    return(
        <div className={st.container}>
            <div className={st.contentContainer}>
                <div className={st.leftcont} id={st.bg_headingsolution}>
                    <h1>{bannerData.heading}</h1>
                    <p>{bannerData.description}</p>
                    <Link href="https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7" target="_blank" rel="noopener noreferrer" id={st.link}>
                            <button>Book a demo</button>
                    </Link>
                </div>
                <div className={st.rightcont}>
                    <Image src={bannerData.imageUrl} alt="Banner" width={400} height={400} priority></Image>
                </div>
            </div>
        </div>
    )
}

export default ProductBanner;