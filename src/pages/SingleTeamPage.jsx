import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/common/navigation/Navbar"
import { team } from "../data/team";
import { projects } from "../data/projects"
import Footer from "../components/common/Footer"
import { HiArrowLongRight } from "react-icons/hi2"
import logo from "../assets/logo.png"

const SingleTeamPage = () => {
    const { name } = useParams();
    const navigate = useNavigate()
    const member = team.find(item => item.url_param === name);

    const member_projects = member && projects.filter(item => item.name === member.name)

  return (
    <>
             <Navbar />

             <div className="single-team-body">
                         <div className="inner-row">
                                   <div className="single-team-content">
                                                <div className="member-description">
                                                        <div className="member-image">
                                                                { member.image === "" ?
                                                              <div className="temp-box">                                                                                 <img src={logo} alt="" />
                                                                   </div>
                                                             :
                                                               <img src={`../../${member.image}`} alt="" />
                                                          }
                                                        </div>
                                                           
                                                           <div className="member-texts">
                                                                     <h3>{member.name}</h3>
                                                                     <span>{member.position}</span>
                                                                     
                                                                     <p>{member.description}</p>
                                                           </div>
                                                </div>


                                                { member_projects.length > 0  && 
                                                        <div className="member-projects">
                                                                    <h2>Projects</h2>
                                                                  <div className="member-projects-row">
                                                                  { member_projects.map(item => 
                                                                        <div className="single-project-moja" key={item.id} onClick={() => navigate(item.link)}>
                                                                                 <div className="single-project-image">
                                                                                         <img src={item.coverphoto} alt="" />
                                                                                          <p>{item.project_year}</p>
                                                                                          <span><HiArrowLongRight /></span>
                                                                                 </div>
                                                                                 <div className="project-texts">
                                                                                        <h3>{item.title}</h3>
                                                                                         <h4>Location: <span>{item.location}</span></h4>
                                                                               </div>
                                                                       </div>
                                                                   )}
                                                                  </div>
                                                        </div>
                                                 }
                                   </div>
                         </div>
             </div>

             <Footer />
    </>
  )
}

export default SingleTeamPage