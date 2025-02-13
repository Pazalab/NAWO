import Navbar from "../components/common/navigation/Navbar"
import { useCountdown } from "../utils/counterutil";
//import { PiHandHeartLight } from "react-icons/pi";
import { Link } from "react-router-dom"
import event_upcoming from "../assets/event1.jpg"
import { PiMapPinLineLight } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { GoDot } from "react-icons/go";
import "../styles/events.css"
import Footer from "../components/common/Footer";
import past_event1 from "../assets/event2.jpg"
import past_event2 from "../assets/award.jpeg"
import { HiArrowLongRight } from "react-icons/hi2";

const TARGET_DAY = new Date("October 18, 2025").getTime();

const Events = () => {
  const [ days, hours, minutes, seconds ] = useCountdown(TARGET_DAY)
  return (
    <>
           <Navbar />
           <div className="events-body">
                       <div className="inner-row">
                                   <div className="events-body-content">
                                            <h2>Upcoming Event</h2>

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
                                                                                                          <p><span><IoCalendarOutline /></span> Saturday, October 18, 2025</p>
                                                                                                 </div>
                                                                                                 <h3>NAWO 3rd Anniversary Fundraising Gala</h3>
                                                                                                 <p>Its more than just a fundraising event—it’s a celebration of generosity, unity, and the power of community. Join us for an inspiring evening where every contribution fuels life-changing initiatives across African villages. Together, we’ll share stories of impact, connect with like-minded individuals, and raise crucial funds to support education, healthcare, women’s empowerment, and economic development. It’s your chance to be part of something bigger, creating hope and brighter futures—one village at a time!</p>

                                                                                                 <Link to={"/nawo-event/nawo-3rd-anniversary-fundraising-gala"}>Explore Event <HiArrowLongRight /></Link>
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
{/* 
                                                                                                 <Link to={"/donate"}>Donate with Zelle <span><PiHandHeartLight /></span></Link> */}
                                                                                       </div>
                                                                          }
                                                                         
                                                             </div>
                                                    </div>

                                                    <h2>Past Events</h2>

                                                    <div className="past-events-wrap">
                                                                 
                                                    <div className="single-event">
                                                                          <div className="single-event-flex">
                                                                                     <div className="single-event-image">
                                                                                            <img src={past_event1} alt="" />
                                                                                      </div>
                                                                                       <div className="single-event-texts">
                                                                                                 <div className="event-head">
                                                                                                           <p><span><PiMapPinLineLight /></span> Ekkon Conference Center</p>
                                                                                                            <span className="dot"><GoDot /></span>
                                                                                                          <p><span><IoCalendarOutline /></span> Sat, November 16, 2024</p>
                                                                                                 </div>
                                                                                                 <h3>2024 NAWO Christmas Party</h3>
                                                                                                 <p>The Noble African Women Organization (NAWO) hosted a spectacular Free Christmas Party, bringing together supporters for a night of celebration and giving. With electrifying performances by DJ Kaycee, the event was filled with joy and entertainment. Guests, dressed elegantly, participated in a charity dance, raising funds through $1 bill donations to support NAWO’s initiatives in healthcare, education, women’s empowerment, and economic development in African villages. The event was a huge success, reinforcing the spirit of giving and NAWO’s mission to uplift underserved communities.</p>
                                                                                       </div>
                                                                          </div> 
                                                             </div>

                                                             <div className="single-event">
                                                                          <div className="single-event-flex">
                                                                                     <div className="single-event-image">
                                                                                            <img src={past_event2} alt="" />
                                                                                      </div>
                                                                                       <div className="single-event-texts">
                                                                                                 <div className="event-head">
                                                                                                           <p><span><PiMapPinLineLight /></span> Ekkon Conference Center</p>
                                                                                                            <span className="dot"><GoDot /></span>
                                                                                                          <p><span><IoCalendarOutline /></span> Sat, September 23, 2023</p>
                                                                                                 </div>
                                                                                                 <h3>NAWO 2rd Anniversary Fundraising Gala</h3>
                                                                                                 <p>Its more than just a fundraising event—it’s a celebration of generosity, unity, and the power of community. Join us for an inspiring evening where every contribution fuels life-changing initiatives across African villages. Together, we’ll share stories of impact, connect with like-minded individuals, and raise crucial funds to support education, healthcare, women’s empowerment, and economic development. It’s your chance to be part of something bigger, creating hope and brighter futures—one village at a time!</p>
                                                                                       </div>
                                                                          </div> 
                                                             </div>
                                                    </div>
                                   </div>
                       </div>
           </div>
           <Footer />
    </>
  )
}

export default Events