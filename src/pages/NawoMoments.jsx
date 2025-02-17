import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import { moments } from "../data/moments"

const NawoMoments = () => {
  return (
    <>
           <Navbar />
           <div className="moments-body">
                      <div className="moments-body-content">
                               <h2>Memorable Moments of NAWO</h2>

                               <div className="moments-body-row">
                                        { moments.map(item => 
                                               <div className="moment-moja" key={item}>
                                                        <img src={item} alt="" />
                                               </div>
                                         )}
                               </div>
                      </div>
           </div>

           <Footer />
    </>
  )
}

export default NawoMoments