import { useState } from "react"
import { sidebarContext } from "./navcontext"
import Header from "./Header"
import Sidebar from "./Sidebar"
const Navbar = () => {
  const [status, setStatus ] = useState(false)
  return (
    <sidebarContext.Provider value={[status, setStatus]}>
              <Header />
              <Sidebar />
    </sidebarContext.Provider>
  )
}

export default Navbar