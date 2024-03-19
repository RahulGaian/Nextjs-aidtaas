import ContactUs from "./index";
import { contactUsData } from "./data";

export default {
  title: "components/ContactUs",
  component: ContactUs,
};

//Learn More
export const ContactComponent = () => (
  <ContactUs data={contactUsData.contact1} />
);
//Contact Us
export const ContactComponent1 = () => (
  <ContactUs data={contactUsData.contact2} />
);
//Book a Demo
export const ContactComponent2 = () => (
  <ContactUs data={contactUsData.contact3} />
);
