import logo1 from "../../assets/transmitio.png"
// import logo2 from "../../assets/snowflake.png"
// import logo3 from "../../assets/rise.png"
// import logo4 from "../../assets/springfield.png"
// import logo5 from "../../assets/vancouver.png"

const PartnersStrip = () => {
  return (
    <div className="partners-strip">
               <div className="inner-row">
                          <div className="partners-strip-content">
                                     <h3>Our Esteemed Partners</h3>
                                     <div className="partner-logos">
                                               <img src={logo1} alt="" />
                                               {/* <img src={""} alt="" />
                                               <img src={""} alt="" /> */}                    
                                     </div>
                          </div>
               </div>
    </div>
  )
}

export default PartnersStrip