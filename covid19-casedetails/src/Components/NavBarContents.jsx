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
      <nav id = "navBarText">
        <ul>
          <li><strong>{nameEmpty()}</strong></li>
        </ul>
        <ul>
          <li className = "navBarUl"><a href="#"><NavLink to = "/main">Main</NavLink></a></li>
          <li className = "navBarUl"><a href="#"><NavLink to = "/list">List</NavLink></a></li>
          <li className = "navBarUl"><a href="#"><NavLink to = "/dataanalysis">Data Analysis</NavLink></a></li>
          <li className = "navBarUl"><a href="#"><NavLink to = "/casetracker">Case Tracker</NavLink></a></li>
        </ul>
      </nav>
       
    
    </>)
}