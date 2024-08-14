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
      <nav id = "navBar">
        <ul>
          <li><strong>{nameEmpty()}</strong></li>
        </ul>
        <ul>
          <li className = "navBarUl"><NavLink to = "/main">Main</NavLink></li>
          <li className = "navBarUl"><NavLink to = "/list">List</NavLink></li>
          <li className = "navBarUl"><NavLink to = "/dataanalysis">Data Analysis</NavLink></li>
          <li className = "navBarUl"><NavLink to = "/casetracker">Case Tracker</NavLink></li>
        </ul>
      </nav>
       
    
    </>)
}