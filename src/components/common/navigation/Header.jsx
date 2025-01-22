import { Link, NavLink, useLocation } from "react-router-dom"
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
      { title: "Story", link: "/who-we-are"},
      { title: "Team", link: "/who-we-are/our-team"},
      { title: "Awards", link: "#"},
  ]
  const [status, setStatus] = useState(false)
  const { pathname }  = useLocation();
  const url = pathname.slice(1, 10)
  const url2 = pathname.slice(11, 20);
  return (
         <header className={url === "our-work/" || url2 === "/our-team" ? "remove" : ""}>
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
                                                      <li><NavLink to={"/what-we-do"}>What We Do</NavLink></li>
                                                      <li><NavLink to={"/our-work"}>Our Work</NavLink></li>
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