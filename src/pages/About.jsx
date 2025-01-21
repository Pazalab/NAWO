import AboutBody from "../components/about/AboutBody"
import AboutHero from "../components/about/AboutHero"
import AboutStory from "../components/about/AboutStory"
import TeamSection from "../components/about/TeamSection"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import PartnersStrip from "../components/home/PartnersStrip"
import "../styles/about.css"

const About = () => {
  return (
    <>
              <div className="about-page-landing">
                        <Navbar />
                        <AboutHero />
              </div>
              <AboutBody />
              <AboutStory />
              <TeamSection />
              <PartnersStrip />
              <Footer />
    </>
  )
}

export default About