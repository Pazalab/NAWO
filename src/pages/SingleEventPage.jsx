import Navbar from "../components/common/navigation/Navbar"
import eventImg from "../assets/event1.jpg"
import Footer from "../components/common/Footer"
// import sponsor1 from "../assets/sanfrancisco.png"
// import sponsor2 from "../assets/rise.png"
// import sponsor3 from "../assets/snowflake.png"
// import sponsor4 from "../assets/vancouver.png"
// import sponsor5 from "../assets/springfield.png"
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

                                       <div className="program-of-events">
                                                <h4>Program of Events</h4>
                                               <div className="event-program-moja">
                                                           <span>1</span>
                                                           <p>Introduction of the Master of Ceremony</p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>2</span>
                                                           <p>Introduction of the Chairlady and members of the High table</p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>3</span>
                                                           <p>Introduction of NAWO President and Vice to the High table</p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>4</span>
                                                           <p>Opening Prayer</p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>5</span>
                                                           <p>National Anthem: USA</p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>6</span>
                                                           <p>Chairlady&apos;s opening remarks</p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>7</span>
                                                           <p>President & Vice Welcome Address ~ <figure>Her Royal Excellency, Mrs. Amaka Nnamchi Ezekwueche & Her Excellency, Mrs. Glory Anyaegbu</figure></p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>8</span>
                                                           <p>Open of Dance Floor / <figure>Chairlady and Members of the High Table</figure></p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>9</span>
                                                           <p>DINNER!!! DINNER!!! DINNER!!! & REFRESHMENTS!!!</p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>10</span>
                                                           <p>Keynote Speech </p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>11</span>
                                                           <p>Charity Dance / <figure>NAWO Members</figure></p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>12</span>
                                                           <p>DANCE!!! DANCE!!! DANCE!!</p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>13</span>
                                                           <p>Showcasing Members of NAWO</p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>14</span>
                                                           <p>DANCE!!! DANCE!!! DANCE!!!</p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>15</span>
                                                           <p>Presentation of Awards and Gifts to selected NAWO Members</p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>16</span>
                                                           <p>Presentation of Appreciation Award to the Chairlady</p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>17</span>
                                                           <p>DANCE!!! DANCE!!! DANCE!!!</p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>18</span>
                                                           <p>Vote of Thanks / <figure>The Vice President of NAWO</figure></p>
                                               </div>
                                               <div className="event-program-moja">
                                                           <span>19</span>
                                                           <p>Thank you!!! Thank you!!! <figure>& Thanks a million for making a huge difference in the lives of the less priviledged in Africa</figure></p>
                                               </div>
                                       </div>
                                       <div className="sponsors">
                                                <div className="corporate-sponsors">
                                                          <h4>Corporate Sponsors</h4>

                                                          <div className="sponsor-logos">
                                                                     <img src={''} alt="" />
                                                                     {/* <img src={''} alt="" />
                                                                     <img src={''} alt="" /> */}
                                                          </div>
                                                </div>

                                                <div className="corporate-sponsors">
                                                          <h4>Photographer & Videographer</h4>

                                                          <div className="sponsor-logos">
                                                                     <img src={''} alt="" />
                                                                     {/* <img src={''} alt="" /> */}
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