import { LuMoveRight } from "react-icons/lu"
import { team } from "../../data/team"
import { useLocation, useNavigate } from "react-router-dom";

const TeamSection = () => {
  const { pathname }  = useLocation();
  const url2 = pathname.slice(11, 22);
  const navigate = useNavigate();
  return (
    <div className="team-section">
              <div className="inner-row">
                      <div className="team-section-content">
                                  <div className="team-intro">
                                             <h2>Meet the Team Behind NAWO</h2>
                                             <p>Meet the inspiring team of friends united by a shared vision to create change in Africa. With diverse expertise, compassionate hearts, and steadfast dedication, they power every initiative and lead NAWO’s mission to uplift lives and empower communities across the continent.</p>
                                  </div>

                                  <div className="team-row">
                                            {
                                                 team.map(item => 
                                                    <div className="team-moja" key={item.id} onClick={() =>navigate(item.link)}>
                                                               <div className="team-image">
                                                                         <img src={url2 === "/our-team" ? `../${item.image}` : item.image} alt="" />
                                                                         <div className="overflow"></div>
                                                                         <span><LuMoveRight /></span>
                                                               </div>
                                                               <h3>{item.name} </h3>
                                                               <p>{item.position}</p>
                                                   </div>
                                                 )
                                            }
                                  </div>
                      </div>
              </div>
    </div>
  )
}

export default TeamSection