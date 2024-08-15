import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { createUsers } from "../Services/createUsers"
import { useState } from "react"

export default function HomePage(){

    const [user, setUser] = useState([])
    

    const navigate = useNavigate()

    const handleChange = (event) => {setUser(event.target.value)}
    const handleSubmit = async (event) => {
        event.preventDefault()
        await createUsers({name: user})
        navigate("/main")
        if (user[0] === undefined){
            navigate("/");
            // console.log("error")
        }
       
        // console.log(name[0])
    }

    return (
        

        <motion.div 
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0, y: -400}}
        transition = {{duration: 1.2}}
        className="divCont">
            <form className="centered-homePageForm" onSubmit={handleSubmit}>
                <label className = "homePageText" htmlFor="username">Welcome to the Covid-19 Database, please enter your name</label>
                <input
                    className= "homePageInput"
                    id="username"
                    name="username"
                    value={user}
                    onChange={handleChange}
                />
                <button className= "homePageButton" type="submit">Enter</button>
            </form>
        </motion.div>
    
    )
}

//url changes when hit enter, stops after handlesubmit