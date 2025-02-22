import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="warpper">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Browei's Homepage
        </motion.span>
        <div className="social">
          <a href="#"><img src="/bilibili_com.png" alt="" /></a>
          <a href="#"><img src="/youtube.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar