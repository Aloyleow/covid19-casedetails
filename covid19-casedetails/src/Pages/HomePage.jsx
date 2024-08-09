import { useNavigate } from "react-router-dom"

export default function HomePage({name, setName}){

    const navigate = useNavigate()

    const handleChange = (event) => {setName(event.target.value)}
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/list")
    }



    return (<>
        
        <h1>Home</h1>
        <form onSubmit = {handleSubmit}>
           <label htmlFor = "username">What is your name human ?</label>
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