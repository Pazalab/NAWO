import economic from "../../assets/economic.jpg"
import health from "../../assets/health.jpg"
import icon1 from "../../assets/stethoscope.png"
import icon2 from "../../assets/magistrate.png"
import icon3 from "../../assets/sorority.png"
import icon4 from "../../assets/economic-growth.png"
import ProgramsWrap from "./ProgramsWrap"
import DonationSection from "../home/DonationSection"

const ProgramsBody = () => {
  return (
    <div className="programs-body">
              <div className="inner-row">
                         <div className="programs-body-content">
                                   <div className="focus-areas">
                                             <h3>Our primary focus is on the following key areas, which not only address essential needs but also open up valuable opportunities for growth and development in various African villages.</h3>
                                             <div className="focus-areas-wrapper">
                                                     <div className="focus-areas-description">
                                                            <div className="focus-area-moja">
                                                                     <img src={icon1} alt="" />
                                     
                                                                     <h4>Health</h4>
                                                                      <p>Access to quality healthcare is vital in Africa. We provide medical resources, promote disease prevention and support wellness programs to build healthier communities and ensure better quality of life for all.</p>
                                                           </div>
                                                           <div className="focus-area-moja">
                                                                    <img src={icon2} alt="" />
                                     
                                                                     <h4>Education</h4>
                                                                     <p>Education breaks the poverty cycle in Africa. We provide access to quality education, empowering youth with the skills and knowledge to create brighter futures and drive positive change.</p>
                                                           </div>
                                                            <div className="focus-area-moja">
                                                                    <img src={icon3} alt="" />
                                     
                                                                 <h4>Women</h4>
                                                                 <p>Empowering women is key to Africa&apos;s growth. We promote women&apos;s rights, offer leadership opportunities, and support economic independence, strengthening communities and fostering equality.</p>
                                                           </div>
                                                           <div className="focus-area-moja">
                                                                <img src={icon4} alt="" />
                                     
                                                                <h4>Economic Growth</h4>
                                                                <p>Economic growth drives Africa&apos;s prosperity. We create opportunities for entrepreneurship, job creation, and skill development, helping build sustainable economies that benefit individuals and communities.</p>
                                                         </div>
                                             </div>
                                                <div className="focus-areas-images">
                                                        <img src={economic} alt="" />
                                                        <img src={health} alt="" />
                                              </div>
                                  </div>
                        </div>


                        <ProgramsWrap />

                        <DonationSection />
                  </div>
              </div>
    </div>
  )
}

export default ProgramsBody