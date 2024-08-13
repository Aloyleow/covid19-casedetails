import { useNavigate } from "react-router-dom"


export default function HomePage({name, setName}){

    const navigate = useNavigate()

    const handleChange = (event) => {setName(event.target.value)}
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/main")
    }



    return (<>
        
       
        <form id = "homePageForm" onSubmit = {handleSubmit}>
           <label htmlFor = "username">Welcome to the Covid-19 Database, please enter your name</label>
           <input
           id = "username"
           name = "username"
           value = {name} 
           onChange = {handleChange}
           />
           <button type = "submit">Enter</button>
        </form>
    
    
    </>)
}

//url changes when hit enter, stops after handlesubmit