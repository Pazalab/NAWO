import valuesImg from "../../assets/values1.jpg"
const ValuesSection = () => {
  return (
    <div className="values-section">
               <div className="values-intro">
                         <h2>What We Stand For</h2>
                         <p>Our Values define who we are and guide everything we do. They reflect our unwavering commitment to compassion, empowerment, integrity and the belief that every life has value. These principles drive us to uplift communities, create opportunities and inspire lasting change.</p>
               </div>
               <div className="values-image">
                          <img src={valuesImg} alt="" />
               </div>
               <div className="values-texts">
                         <div className="value-moja">
                                      <h3>Compassion</h3>
                                      <p>We lead with the heart, always putting the needs of others first. Every action we take is rooted in empathy and geniune desire to uplift those who need it most.</p>
                         </div>
                         <div className="value-moja">
                                     <h3>Empowerment</h3>
                                     <p>We believe in equipping individuals and communities with the tools and opportunities they need to thrive. Our goal is to help unlock their potential and take charge of their futures.</p>
                         </div>
                         <div className="value-moja">
                                    <h3>Integrity</h3>
                                    <p>We do what is right, always. Honesty, transparency and accountability are at the core of everything we do, ensuring trust in our mission and our work.</p>
                         </div>
                         <div className="value-moja">
                                   <h3>Community</h3>
                                   <p>We are stronger together. By building meaningful connections and fostering collaboration, we create sustainable solutions that benefit everyone involved. Together, we&apos;re making a lasting impact.</p>
                         </div>
               </div>
    </div>
  )
}

export default ValuesSection