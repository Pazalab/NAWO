import TeamSection from "../components/about/TeamSection"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import PartnersStrip from "../components/home/PartnersStrip"

const Team = () => {
  return (
    <>
             <Navbar />
             <div className="team-page-body">
                        <TeamSection />
             </div>
             <PartnersStrip />
             <Footer />
    </>
  )
}

export default Team