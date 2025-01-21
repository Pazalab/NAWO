import { Link } from "react-router-dom"
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { solutions } from "../../data/services.js"
import DonationSection from "./DonationSection.jsx";
const ServicesSection = () => {
  return (
    <div className="services-section">
               <div className="inner-row">
                         <div className="services-section-content">
                                    <div className="service-intro">
                                               <h3>What We Do</h3>
                                               <div className="service-intro-column">
                                                        <p>At our core, we&apos;re about driving real change where it&apos;s needed most. Through innovative solutions and community-driven programs, we&apos;re empowering individuals and creating lasting impact across Africa.</p>

                                                        <Link to={"/what-we-do"}>View All Programs <span><GoArrowUpRight /></span></Link>
                                               </div>
                                    </div>

                                    <div className="services-row">
                                                { solutions.map(item => 
                                                        <div className="service-moja" key={item.id}>
                                                                    <img src={item.image} alt="" />
                                                                    <h4>{item.title}</h4>
                                                                    <Link to={item.link}>Read More <span><GoArrowRight /></span></Link>
                                                        </div>
                                                )}
                                    </div>
                         </div>

                         <DonationSection />
               </div>
    </div>
  )
}

export default ServicesSection