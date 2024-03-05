import Style from "./index.module.css"

let Map = () => {
    return(
        <section className="mt-20 lg:mt-44" style={{height:800}}>
        <article className="relative">
          <header className="px-6-custom">
            <h2 className="">Ready to Help, across borders!</h2>
          </header>
  
          <div className="media-wrapper mt-8 lg:mt-16">
           
            <iframe className="media"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3806.36683960978!2d78.3620253!3d17.4421476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93eacedb6bd9%3A0x595bc51a8524819d!2sNAVAYUGA%20VIZVA%2C%20Rajiv%20gandhi%20Nagar%2C%20Gachibowli%2C%20Hyderabad%2C%20Telangana%20500032!5e0!3m2!1sen!2sin!4v1682591399702!5m2!1sen!2sin" 
               style={{border:0,height:800,width:"100%"}} allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="px-4 lg:px-0 mt-8 lg:mt-0">
            <footer className={Style.bgblur + " bg-blur lg:absolute top-0 z-10 p-9 lg:right-44"}>
              <h3 className="">Our Locations</h3>
              <ul className="mt-mt3">
                <li className="border-b border-royal-gray-200 py-8">
                  <address className="flex not-italic">
                    <div>
                      <img src="../public/images/icons/location.svg" alt="Location Icon" />
                    </div>
                    <div className="max-w-sm ml-4">
                      <h5 className="heading-card">United States</h5>
                      <p className="text-base">
                        1968 S Coast Hwy, Suite 5011, Laguna Beach, <br />
                        California, USA 92651.
                      </p>
                      <a className="flex mt-5" href="tel:+118001231234">
                        <img src="../public/images/icons/phone.svg" alt="PHone Icon" />
                        <span className="text-royal-gray-500 ml-3">+1 1800 123 1234</span>
                      </a>
                      <a className="flex mt-3" href="mailto:usaoffice@mobiusplatforms.com">
                        <img src="../public/images/icons/envelope.svg" alt="Envelope Icon" />
                        <span className="text-royal-gray-500 ml-3">
                          info@mobiusplatforms.com
                        </span>
                      </a>
                    </div>
                  </address>
                </li>
                <li className="py-8">
                  <address className="flex not-italic">
                    <div>
                      <img src="../public/images/icons/location.svg" alt="Location Icon" />
                    </div>
                    <div className="max-w-sm ml-4">
                      <h5 className="heading-card">India</h5>
                      <p className="text-base">
                        5th Floor, NAVAYUGA VIZVA, <br />
                        GachiBowli, Hyderabad 500032.
                      </p>
                      <a className="flex mt-5" href="tel:+118001231234">
                        <img src="../public/images/icons/phone.svg" alt="PHone Icon" />
                        <span className="text-royal-gray-500 ml-3">+1 1800 123 1234</span>
                      </a>
                      <a className="flex mt-3" href="mailto:indiaoffice@mobiusplatforms.com">
                        <img src="../public/images/icons/envelope.svg" alt="Envelope Icon" />
                        <span className="text-royal-gray-500 ml-3">
                          info@mobiusplatforms.com
                        </span>
                      </a>
                    </div>
                    <div></div>
                  </address>
                </li>
              </ul>
            </footer>
          </div>
        </article>
      </section>
    )
}
export default Map;