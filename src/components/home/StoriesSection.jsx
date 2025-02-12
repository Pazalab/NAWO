import { GoArrowRight } from "react-icons/go"
import { Link } from "react-router-dom"
import { BsDot } from "react-icons/bs";
import { stories } from "../../data/stories";

const StoriesSection = () => {
  return (
    <div className="stories-section">
                <div className="inner-row">
                            <div className="stories-section-content">
                                       <div className="stories-intro">
                                                <h3>Impact Stories</h3>
                                                <h2>NAWO Essential Reads</h2>
                                       </div>

                                       <div className="stories-row">

                                               { stories.map(item =>
                                                  <div className="story-moja" key={item.id}>
                                                            <div className="story-head">
                                                                    <h4>{item.category}</h4>
                                                                    <span><BsDot /></span>
                                                                    <p>{item.date}</p>
                                                            </div>
                                                            <h3>{item.title}</h3>
                                                             <p>{item.body[0].slice(0, 100)}...</p>
                                                            <Link to={"/"}>Read More <span><GoArrowRight /></span></Link>
                                                  </div>
                                               )}
                                       </div>
                            </div>
                </div>
    </div>
  )
}

export default StoriesSection