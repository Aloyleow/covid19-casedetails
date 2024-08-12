import { NavLink } from "react-router-dom"

export default function NavBarContents({name}){

    const nameEmpty = () => {
        if (name === "") {
          return "Welcome Human"
        } else { 
          return `Welcome ${name}`
        }
      }
    

    return (<>

       <h1>{nameEmpty()}</h1>
       <NavLink to = "/main">Main</NavLink>
       <br></br>
       <NavLink to = "/list">List</NavLink>
       <br></br>
       <NavLink to = "/dataanalysis">Data Analysis</NavLink>
       <br></br>
       <NavLink to = "/casetracker">Case Tracker</NavLink>
    
    
    </>)
}