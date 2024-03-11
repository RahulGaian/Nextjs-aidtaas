import "./index.css";

export default function MyApp({ Component, pageProps }) {
      const getLayout = Component.getLayout ?? ((page) => page)
 
  return (

      <main > 
  {getLayout(<Component {...pageProps} />)}
  </main>
      )
}
