import Header from '@/components/Header/header'
import style from "./index.module.css"
export default function Layout({ children }) {
  return (
    <section >
    <style jsx global>{`
      * {
        margin:0px;
        padding:0px;
      }
      body{
        margin:0px
      }
    `}</style>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </section>
  )
}