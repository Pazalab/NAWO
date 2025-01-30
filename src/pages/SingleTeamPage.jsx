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
                                                                     
                                                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod facere earum beatae illo omnis quaerat fugiat aperiam cumque odit! Quam deleniti voluptate porro dolore pariatur ratione voluptatum aperiam consequatur praesentium iusto, voluptatem, cum similique blanditiis nemo accusantium unde molestias.</p>
                                                                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellendus delectus minus, qui corporis quia ullam, tempora non sint tempore consequuntur quidem iste veritatis quo, nesciunt similique ex velit soluta sapiente quis rem rerum libero beatae laboriosam. Quas, consequatur as lit doe nad los.</p>
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
                                                                                          <p>{item.date}</p>
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