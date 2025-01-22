import { useParams } from "react-router-dom"
import Navbar from "../components/common/navigation/Navbar"
import SingleWorkBody from "../components/work/SingleWorkBody"
import { projects } from "../data/projects";
import Footer from "../components/common/Footer";

const SingleWorkPage = () => {
  const { name } = useParams();

  const data = projects.find(item => item.url_param === name);
  return (
    <>
          <Navbar />
          <SingleWorkBody data={data} />
          <Footer />
    </>
  )
}

export default SingleWorkPage