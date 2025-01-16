import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Donation from "./pages/Donation"
import About from "./pages/About"

function App() {
  
  return (
    <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/who-we-are" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/donate" element={<Donation />} />
    </Routes>
  )
}

export default App
