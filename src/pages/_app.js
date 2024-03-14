import "./index.css";
import Header from "@/components/Header/header";
import Footer from "@/components/footer";
import App from "next/app";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <main>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </main>
    );
  }
}

export default MyApp;
