import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import PartnersStrip from "../components/home/PartnersStrip"
import ProgramsBody from "../components/programs/ProgramsBody"
import ProgramsHero from "../components/programs/ProgramsHero"
import "../styles/programs.css"

const Programs = () => {
  return (
    <>
            <div className="programs-page-landing">
                      <Navbar />
                      <ProgramsHero />
            </div>
            <ProgramsBody />
            <PartnersStrip />
            <Footer />
    </>
  )
}

export default Programs