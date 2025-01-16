import { Link } from "react-router-dom"
import founder from "../../assets/founder.jpg"
import quote from "../../assets/quote.png"
const AboutBody = () => {
  return (
    <div className="about-body">
              <div className="inner-row">
                        <div className="about-body-content">
                                    <div className="about-body-message">
                                                <img src={quote} alt="" />
                                                <h2>President&apos;s Message</h2>
                                                <p>Welcome to our mission of transforming lives and empowering futures across Africa. In countless villages, challenges like poverty and lack of opportunity persist, but so does the strength and resilience of the people.</p>
                                                <p>Join us in this movement. Whether through your time, resources, or support, you can be part of building a legacy of hope and opportunity. Together, we are changing lives and shaping a better future.</p>
                                    </div>
                                     <div className="about-body-image">
                                                <img src={founder} alt="" />

                                                <div className="about-dangling-texts">
                                                              <h3>Acts of kindness ripple outward, spreading compassion and inspiring others to follow suit.</h3>
                                                              <Link to={"/donate"}>Donate</Link>
                                                </div>
                                     </div>
                        </div>
              </div>
    </div>
  )
}

export default AboutBody