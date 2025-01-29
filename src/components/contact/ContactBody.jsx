// import { BsPinMapFill, BsEnvelopeAtFill } from "react-icons/bs";
// import { GiRotaryPhone } from "react-icons/gi";
import ContactForm from "./ContactForm";
const ContactBody = () => {
  return (
    <div className="contact-body">
               <div className="inner-row">
                          <div className="contact-body-content">
                                      <div className="contact-body-column">
                                                   <h2>Have questions or need more details?</h2>
                                                   <p>Don&apos;t hesitate to reach out! We&apos;re here to provide all the clarification you need and answer any questions you have. Let&apos;s connect and make a difference together!</p>

                                                   {/* <div className="contact-details">
                                                                <div className="contact-detail-moja">
                                                                             <span><BsPinMapFill /></span>                                               
                                                                             <div className="contact-detail-texts">
                                                                                         <h4>Visit Us</h4>
                                                                                         <p>Bowery St, New York, 37 USA
                                                                                         NY 10013, USA</p>
                                                                             </div>
                                                                </div>
                                                                <div className="contact-detail-moja">
                                                                             <span><BsEnvelopeAtFill /></span>
                                                                             <div className="contact-detail-texts">
                                                                                       <h4>Connect Via</h4>
                                                                                       <p>support@nobleafricanwomen.org</p>
                                                                                       <p>info@nobleafricanwomen.org</p>
                                                                             </div>
                                                                </div>
                                                                <div className="contact-detail-moja">
                                                                             <span><GiRotaryPhone /></span>
                                                                             <div className="contact-detail-texts">
                                                                                       <h4>Reach out</h4>
                                                                                       <p>(+1) 822 345 6677</p>
                                                                             </div>
                                                                </div>
                                                   </div> */}
                                      </div>
                                      <div className="contact-body-column">
                                                <ContactForm />
                                      </div>
                          </div>
               </div>
    </div>
  )
}

export default ContactBody