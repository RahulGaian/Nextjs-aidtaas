import ContactUs from "./index";
import { contactUsData } from "./data";

export default {
  title: "components/ContactUs",
  component: ContactUs,
};

export const ContactComponent = () => (
  <ContactUs data={contactUsData.contact1} />
);
export const ContactComponent1 = () => (
  <ContactUs data={contactUsData.contact2} />
);
export const ContactComponent2 = () => (
  <ContactUs data={contactUsData.contact3} />
);
