/* eslint-disable react/prop-types */
const SingleProgramBody = ({ data }) => {
  return (
    <div className="single-program-body">
               <div className="inner-row">
                          <div className="single-program-body-content">
                                    <p className="intro">{data.description}</p>

                                     <img src={`../${data.image}`} alt="" />

                                     <div className="more-description">
                                              { data.more_description.map(item => <p key={item}>{item}</p>)}
                                     </div>
                          </div>
               </div>
    </div>
  )
}

export default SingleProgramBody