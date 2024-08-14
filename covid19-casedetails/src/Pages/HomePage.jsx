import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"


export default function HomePage({name, setName}){

    const navigate = useNavigate()

    const handleChange = (event) => {setName(event.target.value)}
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/main")
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
                    value={name}
                    onChange={handleChange}
                />
                <button className= "homePageButton" type="submit">Enter</button>
            </form>
        </motion.div>
    
    )
}

//url changes when hit enter, stops after handlesubmit