import { useContext, useEffect, useRef, useState } from "react"
import { CgClose } from "react-icons/cg"
import { Link, NavLink } from "react-router-dom"
import gsap from "gsap"
import { sidebarContext } from "./navcontext"
// import { MdPhone } from "react-icons/md";
// import { PiEnvelopeLight } from "react-icons/pi";
// import { SiGooglemaps } from "react-icons/si";
import { FaFacebook, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import Dropdown from "./Dropdown"
import { IoIosArrowDown } from "react-icons/io";
const Sidebar = () => {
    const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
    const sidebarRef = useRef();

      const aboutData = [
          { title: "Story", link: "/about-us"},
          { title: "Team", link: "/team"},
          { title: "Nawo Events", link: "/nawo-events"},
          { title: "Awards", link: "/awards"},
      ]
      const [status, setStatus] = useState(false)

    useEffect(() => {
            if(sidebarStatus){
                   sidebarRef.current.classList.add("active");

                   let tl =gsap.timeline();

                   tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                        y: 0,
                        duration: 0.5
                   })

                   tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                          x: 0,
                          duration: 0.5
                   })
            }else{
                   let tl = gsap.timeline();

                   tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                           x: "-105%",
                           duration: 0.5
                   })

                   tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                         y:  "-100%",
                         duration: 0.5
                   })

                setTimeout(() => {
                       sidebarRef.current.classList.remove("active")
                }, 2000)
            }
    }, [sidebarStatus])
  return (
    <div ref={sidebarRef} className="sidebar-section">
              <div className="sidebar-overlay"></div>
              <div className="sidebar-content">
                          <div className="sidebar-header">
                                    <h3>Menu</h3>
                                    <span onClick={() => setSidebarStatus(false)}><CgClose /></span>
                          </div>
                          <div className="sidebar-content-overflow">
                                  <div className="sidebar-nav">
                                             <ul>
                                                     <li><NavLink to={"/"}>Home</NavLink></li>
                                                     <li onClick={() => setStatus(!status)}>
                                                                <div className="dropdown-link">
                                                                         <NavLink to={"/who-we-are"}>Who We Are</NavLink>
                                                                         <span><IoIosArrowDown /></span>
                                                                </div>
                                                               <Dropdown status={status} data={aboutData}/>
                                                     </li>
                                                     <li><NavLink to={"/what-we-do"}>What We Do</NavLink></li>
                                                     <li><NavLink to={"/our-work"}>Our Work</NavLink></li>
                                                     <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                             </ul>

                                             <Link to={"/donate"} className="donate-btn">Donate with Zelle</Link>
                                  </div>
                                   <div className="sidebar-extra">
                                              {/* <div className="sidebar-extra-column">
                                                          <h4>Contact Information</h4>
                                                          <p><span><MdPhone /></span> +1 (555) 0748 999</p>
                                                          <p><span><PiEnvelopeLight /></span>support@nobleafricanwomen.org</p>
                                                          <p><span><SiGooglemaps /></span>3346 Dolfield Ave Baltimore, Maryland</p>
                                              </div> */}
                                              <div className="sidebar-extra-column">
                                                            <h4>Connect with Us</h4>
                                                            <div className="social-links">
                                                                      <ul>
                                                                               <li><Link to={"/"}><span><FaFacebook /></span></Link></li>
                                                                               {/* <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                                               <li><Link to={"/"}><span><FaLinkedinIn /></span></Link></li> */}
                                                                               <li><Link to={"/"}><span><FaYoutube /></span></Link></li>
                                                                      </ul>
                                                            </div>
                                              </div>
                                   </div>
                          </div>
              </div>
    </div>
  )
}

export default Sidebar