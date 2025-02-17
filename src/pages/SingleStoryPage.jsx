import { useParams } from "react-router-dom";
import Navbar from "../components/common/navigation/Navbar"
import { stories } from "../data/stories"
import Footer from "../components/common/Footer";

const SingleStoryPage = () => {
    const { title } = useParams();
    const story = stories.find(item => item.url_param === title);
  return (
    <>
           <Navbar />
           <div className="story-body">
                    <div className="inner-row">
                                <div className="story-body-content">
                                            <h3>{story.category}</h3>
                                            <h2>{story.full_title}</h2>

                                             { story.body.map(item => <p key={item}>{item}</p>)}

                                             <div className="story-images">
                                                        { story.images.map(item => <img key={item} src={`..${item}`} /> )}
                                             </div>
                                </div>
                    </div>
           </div>
          <Footer />
    </>
  )
}

export default SingleStoryPage