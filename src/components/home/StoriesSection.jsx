import { GoArrowRight } from "react-icons/go"
import { Link } from "react-router-dom"
import { BsDot } from "react-icons/bs";

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
                                                  <div className="story-moja">
                                                             <div className="story-head">
                                                                       <h4>Charity</h4>
                                                                       <span><BsDot /></span>
                                                                       <p>May 19, 2024</p>
                                                             </div>
                                                             <h3>Everyone deserves a chance to thrive</h3>
                                                             <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur...</p>
                                                             <Link to={"/"}>Read More <span><GoArrowRight /></span></Link>
                                                  </div>
                                                  <div className="story-moja">
                                                             <div className="story-head">
                                                                       <h4>Impact</h4>
                                                                       <span><BsDot /></span>
                                                                       <p>June 09, 2024</p>
                                                             </div>
                                                             <h3>School Complex Construction</h3>
                                                             <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur...</p>
                                                             <Link to={"/"}>Read More <span><GoArrowRight /></span></Link>
                                                  </div>
                                                  <div className="story-moja">
                                                             <div className="story-head">
                                                                       <h4>Donation</h4>
                                                                       <span><BsDot /></span>
                                                                       <p>Aug 19, 2024</p>
                                                             </div>
                                                             <h3>Be the reason why Africa grows</h3>
                                                             <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur...</p>
                                                             <Link to={"/"}>Read More <span><GoArrowRight /></span></Link>
                                                  </div>
                                       </div>
                            </div>
                </div>
    </div>
  )
}

export default StoriesSection