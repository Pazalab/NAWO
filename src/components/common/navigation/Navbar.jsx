import { useState } from "react"
import { sidebarContext } from "./navcontext"
import Header from "./Header"
import Sidebar from "./Sidebar"
import ScrolledHeader from "./ScrolledHeader"
const Navbar = () => {
  const [status, setStatus ] = useState(false)
  return (
    <sidebarContext.Provider value={[status, setStatus]}>
              <Header />
              <Sidebar />
              <ScrolledHeader />
    </sidebarContext.Provider>
  )
}

export default Navbar