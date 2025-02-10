import Navbar from "../components/common/navigation/Navbar"
import eventImg from "../assets/event1.jpg"
import Footer from "../components/common/Footer"
import sponsor1 from "../assets/sanfrancisco.png"
import sponsor2 from "../assets/rise.png"
import sponsor3 from "../assets/snowflake.png"
import sponsor4 from "../assets/vancouver.png"
import sponsor5 from "../assets/springfield.png"
const SingleEventPage = () => {
  return (
    <>
          <Navbar />

          <div className="single-event-page">
                    <div className="inner-row">
                             <div className="single-event-content">
                                       <div className="event-grid">
                                                  <div className="single-event-image">
                                                             <img src={eventImg} alt="" />
                                                  </div>
                                                  <div className="single-event-body-texts">
                                                            <h3>NAWO 3rd Anniversary Fundraising Gala</h3>

                                                            <h4>Venue: Ekkon Conference Center</h4>
                                                            <h4>Date:  Sat, October 18, 2025</h4>

                                                            <p>Join us for an inspiring evening where every contribution fuels life-changing initiatives across African villages. Together, we’ll share stories of impact, connect with like-minded individuals, and raise crucial funds to support education, healthcare, women’s empowerment, and economic development.</p>
                                                  </div>
                                       </div>

                                       <div className="sponsors">
                                                <div className="corporate-sponsors">
                                                          <h4>Corporate Sponsors</h4>

                                                          <div className="sponsor-logos">
                                                                     <img src={sponsor1} alt="" />
                                                                     <img src={sponsor2} alt="" />
                                                                     <img src={sponsor3} alt="" />
                                                          </div>
                                                </div>

                                                <div className="corporate-sponsors">
                                                          <h4>Photographer & Videographer</h4>

                                                          <div className="sponsor-logos">
                                                                     <img src={sponsor4} alt="" />
                                                                     <img src={sponsor5} alt="" />
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

export default SingleEventPage