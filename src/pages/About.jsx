import AboutBody from "../components/about/AboutBody"
import AboutHero from "../components/about/AboutHero"
import AboutStory from "../components/about/AboutStory"
import Navbar from "../components/common/navigation/Navbar"
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
    </>
  )
}

export default About