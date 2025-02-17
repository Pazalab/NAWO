import { Link, useLocation } from "react-router-dom"
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import logo from "../../assets/logo.png"
import { HiArrowUpRight } from "react-icons/hi2";
const Footer = () => {

  const { pathname } = useLocation();

  const url = pathname.slice(1, 8);
  return (
    <footer>
               <div className="inner-row">
                        <div className={ url === "contact" ? "footer-content remove" : "footer-content"}>
                                    <h3>Let&apos;s talk about how we can change lives together!</h3>

                                    <div className="footer-column">
                                               <div className="footer-column-inner">
                                                        <p>Get in touch with our team</p>
                                                        <Link to={"/contact-us"}>Connect with Us <span><HiArrowUpRight /></span></Link>
                                               </div>
                                    </div>
                        </div>
                        <div className="copyright">
                                  <Link to={"/"} className="footer-logo">
                                              <img src={logo} alt="nawo logo" />
                                   </Link>
                                  <p>NAWO &copy; { new Date().getFullYear() }. All Rights Reserved</p>
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
    </footer>
  )
}

export default Footer