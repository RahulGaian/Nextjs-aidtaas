import ContactUs from "./index";
import { contactUsData } from "./data";

export default {
  title: "components/ContactUs",
  component: ContactUs,
};

// export const contactUsComp = () => <ContactUs data={contactUsData.contact1} />;
export const ContactComponent = () => (
  <ContactUs data={contactUsData.contact1} />
);
