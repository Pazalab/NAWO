import logo1 from "../../assets/sanfrancisco.png"
import logo2 from "../../assets/snowflake.png"
import logo3 from "../../assets/rise.png"
import logo4 from "../../assets/springfield.png"
import logo5 from "../../assets/vancouver.png"

const PartnersStrip = () => {
  return (
    <div className="partners-strip">
               <div className="inner-row">
                          <div className="partners-strip-content">
                                     <div className="partner-logos">
                                               <img src={logo1} alt="" />
                                               <img src={logo2} alt="" />
                                               <img src={logo3} alt="" />
                                               <img src={logo4} alt="" />
                                               <img src={logo5} alt="" />
                                     </div>
                          </div>
               </div>
    </div>
  )
}

export default PartnersStrip