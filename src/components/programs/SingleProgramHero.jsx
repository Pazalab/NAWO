/* eslint-disable react/prop-types */
const SingleProgramHero = ({data}) => {
  return (
    <div className="programs-hero">
               <div className="inner-row">
                          <div className="programs-hero-content">
                                       <div className="programs-hero-inner">
                                                   <h1>{data.title}</h1>
                                       </div>
                          </div>
               </div>
    </div>
  )
}

export default SingleProgramHero