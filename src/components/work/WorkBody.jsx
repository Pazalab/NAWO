import { HiArrowLongRight } from "react-icons/hi2"
import { projects } from "../../data/projects"
import { useNavigate } from "react-router-dom"

const WorkBody = () => {
    const navigate = useNavigate();
  return (
    <div className="work-body">
              <div className="inner-row">
                        <div className="work-body-content">
                                   { projects.map(item => 
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
    </div>
  )
}

export default WorkBody