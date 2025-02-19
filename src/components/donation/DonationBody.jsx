//import DonationForm from "./DonationForm"
import donation from "../../assets/donation3.jpg"
import zelle from "../../assets/zelle.webp"
import { BsCurrencyDollar } from "react-icons/bs";

const DonationBody = () => {
  return (
    <div className="donation-body">
              <div className="inner-row">
                          <div className="donation-body-content">
                                     <div className="donation-body-grid">
                                                   <h3>Your generosity has the power to change lives. Every contribution, big or small, helps us bring hope, provide essential resources, and create opportunities for those in need. Join us in building a brighter future—your donation can spark lasting impact.</h3>

                                                   <div className="">
                                                              <img src={donation} alt="" />
                                                   </div>
                                     </div>

                                     <div className="donation-wrapper">
                                                  <img src={zelle} alt="" />
                                                <h4>Donate with Zelle</h4>

                                                <p className="intro">Every donation, no matter the size, plays a vital role in the success of the programs listed below and beyond. Your generosity helps us support those in greatest need, making a meaningful and lasting impact. </p>

                                                <div className="donation-packets">
                                                          <div className="packet-moja">
                                                                      <span><BsCurrencyDollar /> 50</span>
                                                                       <p>provides chairs for schools</p>
                                                          </div>
                                                          <div className="packet-moja">
                                                                      <span><BsCurrencyDollar />75</span>
                                                                       <p> provides medical supplies</p>
                                                          </div>
                                                          <div className="packet-moja">
                                                                      <span><BsCurrencyDollar />100</span>
                                                                       <p>provides renovation to schools</p>
                                                          </div>
                                                          <div className="packet-moja">
                                                                      <span><BsCurrencyDollar />200</span>
                                                                       <p>provides clean water</p>
                                                          </div>
                                                          <div className="packet-moja">
                                                                      <span><BsCurrencyDollar />500</span>
                                                                       <p>provides school fees</p>
                                                          </div>
                                                          <div className="packet-moja">
                                                                      <span><BsCurrencyDollar />1000</span>
                                                                       <p>provides scholarships</p>
                                                          </div>
                                                </div>

                                                <div className="payment-details">
                                                          <p>Use the following Zelle phone number and name details to place your donation:</p>
                                                           <div className="payment-wrap">
                                                                     <h5><span>Phone Number:</span>(202)-378-7855</h5>
                                                                     <h5><span>Name: </span>Glory Anyaegbu, NAWO Treasurer</h5>
                                                           </div>
                                                </div>

                                                <p className="final">Thank you for your generous support! </p>
                                     </div>

                                     {/* <DonationForm /> */}
                          </div>
              </div>
    </div>
  )
}

export default DonationBody