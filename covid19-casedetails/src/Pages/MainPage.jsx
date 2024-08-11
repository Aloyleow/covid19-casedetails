import { NavLink } from "react-router-dom"


export default function MainPage(){
    
    
    return (<>
    
    <NavLink to = "/list">
    <h2>List of Patients</h2>
    </NavLink>
    <NavLink to = "/dataanalysis">
    <h2>Data Analysis</h2>
    </NavLink>
    
     
    </>)
}