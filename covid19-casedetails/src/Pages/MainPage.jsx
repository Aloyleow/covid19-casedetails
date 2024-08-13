import { NavLink } from "react-router-dom"


export default function MainPage(){
    
    
    return (<>
    <div className = "divMainPage">
    <NavLink to = "/list">
    <h2 className = "leftMainPage">List of Patients</h2>
    </NavLink>
    <NavLink to = "/dataanalysis">
    <h2 className = "rightMainPage">Data Analysis</h2>
    </NavLink>
    </div>
    
     
    </>)
}