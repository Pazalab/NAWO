import { useState } from "react"

/* eslint-disable react/prop-types */
const SingleWorkBody = ({ data }) => {
    const [active, setActive] = useState("Photos")
  return (
    <div className="single-work-body">
              <div className="inner-row">
                          <div className="single-work-body-content">
                                    <div className="single-work-body-intro">
                                               <h3><span>Project Name: </span>{data.title}</h3>
                                               <h4><span>Project Coordinator: </span>{data.owner}</h4>
                                               <h4><span>Project Date: </span>{data.date}</h4>
                                               <h4><span>Location: </span>{data.location}</h4>
                                    </div>

                                    <div className="single-work-body-wrapper">
                                                  <div className="wrapper-btns"> 
                                                              <div onClick={() => setActive("Photos")} className={ active === "Photos" ? "btn-switch active" : "btn-switch"}>Photos</div>
                                                              <div onClick={() => setActive("Videos")} className={ active === "Videos" ? "btn-switch active" : "btn-switch"}>Videos</div>
                                                  </div>


                                                   { active === "Photos" ?
                                                         <div className="photo-grid">
                                                                   { data.photos.map(item => 
                                                                         <img src={`${item}`} alt="" key={item} />
                                                                   )}
                                                         </div>
                                                         :
                                                         <div className="video-grid">
                                                                    { data.videos.map(item => 
                                                                           <div className="video-box" key={item}>
                                                                                      {/* <iframe src={item}  allowfullscreen title='video'  /> */}
                                                                                      <video src={item} controls></video>
                                                                           </div>
                                                                    )}
                                                         </div>
                                                     }
                                    </div>
                          </div>
              </div>
    </div>
  )
}

export default SingleWorkBody