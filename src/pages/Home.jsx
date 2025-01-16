import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/home/HeroSection"
import AboutSection from "../components/home/AboutSection"
import "../styles/home.css"
import ServicesSection from "../components/home/ServicesSection"
import EventsSection from "../components/home/EventsSection"
import StoriesSection from "../components/home/StoriesSection"
import PartnersStrip from "../components/home/PartnersStrip"
import Footer from "../components/common/Footer"

const Home = () => {
  return (
    <>
            <div className="landing">
                     <Navbar />
                     <HeroSection />
            </div>
            <AboutSection />
            <ServicesSection />
            <EventsSection />
            <StoriesSection />
            <PartnersStrip />
            <Footer />
    </>
  )
}

export default Home