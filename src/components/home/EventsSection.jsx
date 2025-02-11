import { Link } from "react-router-dom"
import { HiArrowLongRight } from "react-icons/hi2";
import { PiMapPinLineLight } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { GoArrowRight, GoDot } from "react-icons/go";
import event1 from "../../assets/hero2.jpg"
import { PiHandHeartLight } from "react-icons/pi";
import event2 from "../../assets/hero3.jpg"
import event3 from "../../assets/donation1.jpg"
import event4 from "../../assets/hero1.jpg"
import event_upcoming from "../../assets/event1.jpg"
import { useCountdown } from "../../utils/counterutil";
import { projects } from "../../data/projects";


  const TARGET_DAY = new Date("October 18, 2025").getTime();
  

const EventsSection = () => {
  const [ days, hours, minutes, seconds ] = useCountdown(TARGET_DAY)
  return (
    <div className="events-section">
             <div className="inner-row">
                       <div className="events-section-content">
                                  <div className="events-section-intro">
                                          <h3>Upcoming Events</h3>
                                          <div className="events-section-column">
                                                       <h2>Exciting Opportunities to Make a Difference</h2>
                                                       <Link to={"/nawo-events"}>All Events <span><HiArrowLongRight /></span></Link>
                                             </div> 
                                  </div>
                                  <div className="events-section-wrapper">                           
                                                    <div className="events-wrap">
                                                             <div className="single-event">
                                                                          <div className="single-event-flex">
                                                                                     <div className="single-event-image">
                                                                                            <img src={event_upcoming} alt="" />
                                                                                      </div>
                                                                                       <div className="single-event-texts">
                                                                                                 <div className="event-head">
                                                                                                           <p><span><PiMapPinLineLight /></span> Ekkon Conference Center</p>
                                                                                                            <span className="dot"><GoDot /></span>
                                                                                                          <p><span><IoCalendarOutline /></span> Sat, October 18, 2025</p>
                                                                                                 </div>
                                                                                                 <h3>NAWO 3rd Anniversary Fundraising Gala</h3>
                                                                                                 <p>Its more than just a fundraising event—it’s a celebration of generosity, unity, and the power of community. Join us for an inspiring evening where every contribution fuels life-changing initiatives across African villages. Together, we’ll share stories of impact, connect with like-minded individuals, and raise crucial funds to support education, healthcare, women’s empowerment, and economic development. It’s your chance to be part of something bigger, creating hope and brighter futures—one village at a time!</p>
                                                                                       </div>
                                                                          </div>
                                                                          
                                                                          { ((days + hours + minutes + seconds) <= 0)  ? "" :
                                                                                       <div className="countdown-wrap">
                                                                                                  <h3>Countdown to the Event</h3>
                                                                                                 <div className="countdown">
                                                                                                         <div className="count-box">
                                                                                                                 <span>{days}</span>
                                                                                                                 <p>Days</p>
                                                                                                         </div>
                                                                                                         
                                                                                                         <div className="count-box">
                                                                                                                 <span>{hours}</span>
                                                                                                                 <p>Hrs</p>
                                                                                                         </div>
                                                                                                        
                                                                                                         <div className="count-box">
                                                                                                                 <span>{minutes}</span>
                                                                                                                 <p>Mins</p>
                                                                                                         </div>
                                                                                                         
                                                                                                         <div className="count-box">
                                                                                                                 <span>{seconds}</span>
                                                                                                                 <p>Secs</p>
                                                                                                         </div>
                                                                                                 </div>

                                                                                                 <Link to={"/donate"}>Donate with Zelle <span><PiHandHeartLight /></span></Link>
                                                                                       </div>
                                                                          }
                                                                         
                                                             </div>
                                                    </div>
                                          </div>
                                          <div className="events-wrap-column">
                                                    <h2>Kindness makes a difference — explore our past projects and initiatives.</h2>
                                          </div>
                                  <div className="events-section-row">
                                           { projects.slice(0, 4).map(item => 
                                                    <div className="event-moja" key={item.id}>
                                                                <div className="event-image">
                                                                        <img src={item.coverphoto} alt="" />
                                                                        <Link to={item.link}><span><GoArrowRight /></span></Link>
                                                                </div>
                                                               <div className="event-texts">
                                                                        <div className="event-head">
                                                                                    <p><span><PiMapPinLineLight /></span> {item.country}</p>
                                                                {/* <span className="dot"><GoDot /></span>
                                                                <p><span><RiTimerLine /></span> Starts 8.00 am</p> */}
                                                                        </div>
                                                                        <h3>{item.title}</h3>
                                                                        <p><span>Project Year:</span>{item.project_year}</p>
                                                               </div>
                                                    </div>
                                           )}
                                  </div>

                                  <div className="more-btn">
                                             <Link to={"/our-work"}>View All Projects <span><HiArrowLongRight /></span></Link>
                                  </div>
                       </div>
             </div>
    </div>
  )
}

export default EventsSection