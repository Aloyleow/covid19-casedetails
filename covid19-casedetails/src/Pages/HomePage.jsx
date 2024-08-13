import { useNavigate } from "react-router-dom"


export default function HomePage({name, setName}){

    const navigate = useNavigate()

    const handleChange = (event) => {setName(event.target.value)}
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/main")
    }



    return (
        

        <div className="divCont">
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
        </div>
    
    )
}

//url changes when hit enter, stops after handlesubmit