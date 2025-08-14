import Navbar from "../components/navbar/Navbar";
import ContactForm from "../components/ContactForm";
import Faq from "../components/faq/Faq";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-primaryIvory">
      <Navbar />
      <ContactForm />
      <Faq />
      <Footer />
    </div>
  );
};

export default Contact;
