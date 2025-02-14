import Navbar from "../components/common/navigation/Navbar"
import eventImg from "../assets/event1.jpg"
import Footer from "../components/common/Footer"
import { PiMapPinLineLight } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { useCountdown } from "../utils/counterutil";
import event2 from "../assets/event10.jpg"

const TARGET_DAY = new Date("October 18, 2025").getTime();

const SingleEventPage = () => {
  const [ days, hours, minutes, seconds ] = useCountdown(TARGET_DAY);

  return (
    <>
          <div className="event-page-landing">
                      <Navbar />
                      <div className="single-event-hero">
                                <div className="inner-row">
                                           <div className="single-hero-content">
                                                      <div className="single-event-hero-grid">
                                                                    <div className="single-hero-texts">
                                                                               <h3>You are Invited</h3>
                                                                               <h1>Be a Part of An Unforgettable Evening of Hope and Transformation</h1>
                                                                               <p>Join us on October 18th at The Ekkon Conference Center for an extraordinary evening dedicated to creating lasting change. Together, we will gather with one purpose—to raise vital funds that bring hope, opportunity, and support to the less privileged in Africa.</p>

                                                                               <div className="single-hero-row">
                                                                                           <div className="single-hero-box">
                                                                                                     <h4><span><IoCalendarOutline /></span> Saturday, October 18th, 2025</h4>
                                                                                           </div>
                                                                                           <div className="single-hero-box">
                                                                                                      <h4><span><PiMapPinLineLight /></span>Ekkon Conference Center</h4>
                                                                                           </div>
                                                                               </div>
                                                                   </div>
                                                                   <div className="single-hero-image">
                                                                                <img src={eventImg} alt="" />
                                                                   </div>
                                                      </div>
                                           </div>
                                </div>
                      </div>
          </div>

        <div className="single-event-wrap">
                  <div className="countdown-container">                                                                                             
                      { ((days + hours + minutes + seconds) <= 0)  ? "" :
                                  <div className="event-countdown-wrap">
                                            <h3>Countdown to the Event</h3>
                                            <div className="countdown-flex">
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
                                     </div>
                                }
               </div>
        </div>

          <div className="event-details-section">
                   <div className="inner-row">
                                <div className="event-details-content">
                                             <div className="event-details-texts">
                                                         <h3>Event Details</h3>
                                                       <h2>An Evening of Impact</h2>
                                                       <p>Indulge in an unforgettable night of exquisite cuisine, mesmerizing entertainment, and powerful stories of resilience that will touch your heart. Join us as we come together with purpose and passion to rebuild lives, one act of generosity at a time. Your presence isn’t just an evening out—it’s a chance to make a lasting difference. Be a beacon of hope and help us transform lives through the power of compassion and community.</p>

                                                       <div className="itinerary-wrap">
                                                                    <h4>Itinerary for the Night:</h4>
                                                                     <ul>
                                                                              <li>Welcome Address</li>
                                                                              <li>Prayer & National Anthem</li>
                                                                              <li>Opening of the Dance Floor</li>
                                                                              <li>Dinner & Entertainment</li>
                                                                              <li>Keynote Speech</li>
                                                                              <li>Charity Dance</li>
                                                                              <li>Presentation of NAWO ladies</li>
                                                                              <li>Presentaion of Awards</li>
                                                                              <li>Dance</li>
                                                                              <li>Vote of Thanks</li>
                                                                     </ul>
                                                       </div>
                                             </div>
                                             <div className="event-detail-image">
                                                     <img src={event2} alt="" />
                                             </div>
                                </div>
                   </div>
          </div>
          <div className="event-image-strip"></div>

          <div className="sponsors-row">
                     <div className="inner-row">
                                 <div className="partners-content">
                                            <h4>Meet our generous sponsors</h4>

                                            <div className="sponsors-logos">
                                                        <img src="" alt="" />
                                                        <img src="" alt="" />
                                                        <img src="" alt="" />
                                            </div>
                                 </div>
                     </div>
          </div>
          <Footer />
    </>
  )
}

export default SingleEventPage