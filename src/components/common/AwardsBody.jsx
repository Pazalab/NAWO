import { Link } from "react-router-dom"
import award from "../../assets/asa-award.jpeg"
import { HiArrowLongRight } from "react-icons/hi2";

const AwardsBody = () => {
  return (
    <div className="awards-body">
              <div className="inner-row">
                        <div className="awards-body-content">
                                     <img src={award} alt="" />

                                     <h2>African Community Service Award 2022</h2>

                                     <p>Noble African Women Organization was nominated and awarded by the African Community Award in 2022 for her extraordinary and remarkable charity work throughout the African continent.</p>
                                     <p>NAWO is a 501c3 Charity Organization that assists less privileged African villagers. In 2022, the group gave many scholarships to children in Kenya and Nigeria. They also provided food to African villages in Nigeria, Cameroon, and Ghana,  assisting over 30 villages in the same year.</p>

                                     <Link to={"https://africanheroesonline.com/2022-awardees/f/nawo"} target="_blank">More about ACSA <span><HiArrowLongRight /></span></Link>
                                    
                        </div>
              </div>
    </div>
  )
}

export default AwardsBody