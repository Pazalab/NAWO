import { Link } from "react-router-dom"
import african1 from "../../assets/african1.jpg"
import african2 from "../../assets/african2.jpg"
import { PiHandHeartLight } from "react-icons/pi";

const DonationSection = () => {
  return (
    <div className="donation-section">
               <div className="donation-image-column">
                           <img src={african1} alt="" />
                           <img src={african2} alt="" />
               </div>
               <div className="donation-description">
                           <h3>Become a Donor</h3>
                           <h2>Open Hearts Make a Difference.</h2>

                           <p>Driven by compassion and generosity, we urge you to join us in extending kindness and supporting our mission. Even the smallest acts of giving have the power to ignite hope, transform lives, and foster meaningful change—creating stronger communities and brighter futures for everyone.</p>

                           <p>We deeply value any contribution you can make, as it plays a vital role in driving the success of our causes and creating meaningful impact.</p>

                           <Link to={"/donate"}>Donate with Zelle <span><PiHandHeartLight /></span></Link>
               </div>
    </div>
  )
}

export default DonationSection