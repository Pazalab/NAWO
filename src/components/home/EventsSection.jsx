import { Link } from "react-router-dom"
import { HiArrowLongRight } from "react-icons/hi2";
import { PiMapPinLineLight } from "react-icons/pi";
import { RiTimerLine } from "react-icons/ri";
import { GoArrowRight, GoDot } from "react-icons/go";
import event1 from "../../assets/hero2.jpg"
import event2 from "../../assets/hero3.jpg"
import event3 from "../../assets/donation1.jpg"
import event4 from "../../assets/hero1.jpg"
const EventsSection = () => {
  return (
    <div className="events-section">
             <div className="inner-row">
                       <div className="events-section-content">
                                  <div className="events-section-intro">
                                          <h3>Upcoming Events</h3>
                                          <div className="events-section-column">
                                                    <h2>Kindness makes a difference — explore our events and initiatives.</h2>
                                                    <Link to={"/events"}>All Events <span><HiArrowLongRight /></span></Link>
                                          </div>
                                  </div>
                                  <div className="events-section-row">
                                            <div className="event-moja">
                                                       <div className="event-image">
                                                                 <img src={event1} alt="" />
                                                                 <Link to={"/"}><span><GoArrowRight /></span></Link>
                                                       </div>
                                                       <div className="event-texts">
                                                                <div className="event-head">
                                                                            <p><span><PiMapPinLineLight /></span> Accra, Ghana</p>
                                                                            <span className="dot"><GoDot /></span>
                                                                            <p><span><RiTimerLine /></span> Starts 8.00 am</p>
                                                                </div>
                                                                <h3>Improve lives and Strengthen the hope</h3>
                                                                <p>May 24, 2025</p>
                                                       </div>
                                            </div>

                                            <div className="event-moja">
                                                       <div className="event-image">
                                                                 <img src={event2} alt="" />
                                                                 <Link to={"/"}><span><GoArrowRight /></span></Link>
                                                       </div>
                                                       <div className="event-texts">
                                                                <div className="event-head">
                                                                            <p><span><PiMapPinLineLight /></span> Anambra State, Nigeria</p>
                                                                            <span className="dot"><GoDot /></span>
                                                                            <p><span><RiTimerLine /></span> Starts 9.00 am</p>
                                                                </div>
                                                                <h3>Make a Positive impact every day</h3>
                                                                <p>July 10, 2025</p>
                                                       </div>
                                            </div>

                                            <div className="event-moja">
                                                       <div className="event-image">
                                                                 <img src={event3} alt="" />
                                                                 <Link to={"/"}><span><GoArrowRight /></span></Link>
                                                       </div>
                                                       <div className="event-texts">
                                                                <div className="event-head">
                                                                            <p><span><PiMapPinLineLight /></span> Oloitoktok, Kenya</p>
                                                                            <span className="dot"><GoDot /></span>
                                                                            <p><span><RiTimerLine /></span> Starts 10.00 am</p>
                                                                </div>
                                                                <h3>Join us in making a brighter future</h3>
                                                                <p>September 10, 2025</p>
                                                       </div>
                                            </div>

                                            <div className="event-moja">
                                                       <div className="event-image">
                                                                 <img src={event4} alt="" />
                                                                 <Link to={"/"}><span><GoArrowRight /></span></Link>
                                                       </div>
                                                       <div className="event-texts">
                                                                <div className="event-head">
                                                                            <p><span><PiMapPinLineLight /></span> Djimouno, Cameroon</p>
                                                                            <span className="dot"><GoDot /></span>
                                                                            <p><span><RiTimerLine /></span> Starts 9.00 am</p>
                                                                </div>
                                                                <h3>Make a Positive impact every day</h3>
                                                                <p>July 10, 2025</p>
                                                       </div>
                                            </div>
                                  </div>
                       </div>
             </div>
    </div>
  )
}

export default EventsSection