import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"


export default function MainPage(){
    
    
    return (<>
    
        <motion.div 
        className="divMainPage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1,}}
        exit={{ opacity: 0,}}
        transition = {{duration: 0.5}}
        >
            <NavLink to="/list">
                <h2 className="leftMainPage">List of Patients</h2>
            </NavLink>
            <NavLink to="/dataanalysis">
                <h2 className="rightMainPage">Data Analysis</h2>
            </NavLink>
        </motion.div>
    </>)
}