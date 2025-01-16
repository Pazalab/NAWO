import Navbar from "../components/common/navigation/Navbar"
import ContactBody from "../components/contact/ContactBody"
import ContactHero from "../components/contact/ContactHero"
import "../styles/contact.css"
import Footer from "../components/common/Footer"

const Contact = () => {
  return (
    <>
            <div className="contact-page-landing">
                       <Navbar />
                       <ContactHero />
            </div>
            <ContactBody />
            <Footer />
    </>
  )
}

export default Contact