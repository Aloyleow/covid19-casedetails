import { NavLink } from "react-router-dom"
import { getUser } from "../Services/getUser"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NavBarContents(){

  const [userName, setUserName] = useState([])

  
  useEffect(() => {
    const loadUserData = async () => {
      const name = await getUser();
      setUserName(name[name.length -1].name);
    };
    loadUserData();
  }, [])

  
  
  
    return (<>
    <motion.div
    initial = {{opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{opacity: 0, }}
    transition = {{duration: 0.5}}
    >
      <nav id = "navBar">
        <ul>
          <li><strong>Welcome {userName}</strong></li>
        </ul>
        <ul>
          <li className = "navBarUl"><NavLink to = "/main">Main</NavLink></li>
          <li className = "navBarUl"><NavLink to = "/list">List</NavLink></li>
          <li className = "navBarUl"><NavLink to = "/dataanalysis">Data Analysis</NavLink></li>
          <li className = "navBarUl"><NavLink to = "/casetracker">Case Tracker</NavLink></li>
        </ul>
      </nav>
      </motion.div>
       
    
    </>)
}