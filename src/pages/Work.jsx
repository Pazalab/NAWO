import Navbar from "../components/common/navigation/Navbar"
import WorkBody from "../components/work/WorkBody"
import WorkHero from "../components/work/WorkHero"
import "../styles/work.css"
const Work = () => {
  return (
    <>
             <div className="work-page-landing">
                         <Navbar />
                         <WorkHero />
             </div>
             <WorkBody />
    </>
  )
}

export default Work