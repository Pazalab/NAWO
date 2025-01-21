import { useParams } from "react-router-dom"
import Navbar from "../components/common/navigation/Navbar"
import SingleProgramHero from "../components/programs/SingleProgramHero"
import { solutions } from "../data/services";
import SingleProgramBody from "../components/programs/SingleProgramBody";
import DonationSection from "../components/home/DonationSection";
import PartnersStrip from "../components/home/PartnersStrip";
import Footer from "../components/common/Footer";

const SingleProgram = () => {
    const { name } = useParams();

    const data = solutions.find(item => item.url_param === name);
  return (
    <>
            <div className="programs-page-landing">
                        <Navbar />
                        <SingleProgramHero data={data} />
            </div>
            <SingleProgramBody data={data} />
            <div className="inner-row adjust">
                      <DonationSection />
            </div>
            <PartnersStrip />
            <Footer />
     </>
  )
}

export default SingleProgram