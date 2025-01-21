import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.png"
//import { TfiSearch } from "react-icons/tfi";
import { CgMenu } from "react-icons/cg";
import { useContext, useState } from "react";
import { sidebarContext } from "./navcontext";
import Dropdown from "./Dropdown";
import { PiHandHeartLight } from "react-icons/pi";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
  const aboutData = [
      { title: "Story", link: "/about-us"},
      { title: "Team", link: "/team"},
      { title: "Awards", link: "#"},
      { title: "Financials", link: '#'}
  ]
  const [status, setStatus] = useState(false)
  return (
    <header>
                       <div className="header-content">
                                 <Link to={"/"} className="logo">
                                          <img src={logo} alt="Nawo Logo" />
                                 </Link>
                                  <nav>
                                            <ul>
                                                      <li><NavLink to={"/"}>Home</NavLink></li>
                                                      <li onMouseEnter={() => setStatus(true)} onMouseLeave={() => setStatus(false)}><NavLink to={"/who-we-are"}>Who We Are</NavLink>
                                                                <Dropdown data={aboutData} status={status}  />
                                                      </li>
                                                      <li><Link to={"#"}>What We Do</Link></li>
                                                      <li><Link to={"#"}>Events</Link></li>
                                                      <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                            </ul>
                                  </nav>
                                  <div className="header-extra">
                                             {/* <div className="search-box">
                                                       <span><TfiSearch /></span>
                                             </div> */}
                                             <Link to={"/donate"}>Donate Today <span><PiHandHeartLight /></span></Link>
                                             <span className="menu-btn" onClick={() => setSidebarStatus(true)}><CgMenu /></span>
                                  </div>
                       </div>
    </header>
  )
}

export default Header