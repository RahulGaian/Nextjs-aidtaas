import "./index.css";
import Header from "@/components/Header/header";
import Footer from "@/components/footer";
import NextNProgress from "nextjs-progressbar";
import { DM_Sans } from "next/font/google";
import App from "next/app";
const dms = DM_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <main>
        <Header></Header>
        <NextNProgress color="#ad00a2" />

        <Component {...pageProps} />
        <Footer></Footer>
      </main>
    );
  }
}

export default MyApp;
