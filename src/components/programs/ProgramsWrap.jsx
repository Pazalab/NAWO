import { Link } from "react-router-dom"
import { GoArrowRight } from "react-icons/go";
import { solutions } from "../../data/services.js"

const ProgramsWrap = () => {
  return (
    <div className="programs-wrapper">
                 <p>At our core, we&apos;re about driving real change where it&apos;s needed most. Through innovative solutions and community-driven programs, we&apos;re empowering individuals and creating lasting impact across Africa.</p>
              <div className="programs-row">
                        { solutions.map(item => 
                            <div className="service-moja" key={item.id}>
                                           <img src={item.image} alt="" />
                                          <h4>{item.title}</h4>
                                           <Link to={item.link}>Read More <span><GoArrowRight /></span></Link>
                            </div>
                       )}
              </div>
    </div>
  )
}

export default ProgramsWrap