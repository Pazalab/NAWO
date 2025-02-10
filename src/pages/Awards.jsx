import AwardsBody from "../components/common/AwardsBody"
import AwardsHero from "../components/common/AwardsHero"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"

const Awards = () => {
  return (
    <>
           <div className="awards-page-body">
                     <Navbar />
                     <AwardsHero />
           </div>
           <AwardsBody />
           <Footer />
    </>
  )
}

export default Awards