import { Routes, Route, useLocation } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Donation from "./pages/Donation"
import About from "./pages/About"
import Programs from "./pages/Programs"
import { useEffect } from "react"
import SingleProgram from "./pages/SingleProgram"
import Work from "./pages/Work"
import SingleWorkPage from "./pages/SingleWorkPage"
import Team from "./pages/Team"
import SingleTeamPage from "./pages/SingleTeamPage"
import Events from "./pages/Events"

function App() {
  const location = useLocation();

  useEffect(() => {
           window.scrollTo(0, 0)
  }, [location])
  return (
    <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/who-we-are" element={<About />} />
              <Route path="/what-we-do" element={<Programs />} />
              <Route path="/what-we-do/:name" element={<SingleProgram />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/nawo-events" element={<Events />} />
              <Route path="/donate" element={<Donation />} />
              <Route path="/our-work" element={<Work />} />
              <Route path="/our-work/:name" element={<SingleWorkPage />} />
              <Route path="/who-we-are/our-team" element={<Team />} />
              <Route path="/who-we-are/our-team/:name" element={<SingleTeamPage />} />
    </Routes>
  )
}

export default App
