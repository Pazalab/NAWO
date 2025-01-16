import "../styles/donate.css"
import Navbar from "../components/common/navigation/Navbar"
import DonationHero from "../components/donation/DonationHero"
import DonationBody from "../components/donation/DonationBody"
import PartnersStrip from "../components/home/PartnersStrip"
import Footer from "../components/common/Footer"
const Donation = () => {
  return (
    <>
           <div className="donation-page-landing">
                      <Navbar />
                      <DonationHero />
           </div>
           <DonationBody />
           <PartnersStrip />
           <Footer />
    </>
  )
}

export default Donation