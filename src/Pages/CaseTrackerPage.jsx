import { getTrackData } from "../Services/getTrackData"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function CaseTrackerPage({setShowSaved}){
    const [loading, setLoading] = useState(true)
    const [trackedCase, setTrackedCase] = useState([])
   
    useEffect(() => {
        
        const loadCase = async () => {
            const data = await getTrackData()
            setTrackedCase(data)
            setLoading(false)
        }

        loadCase()

    }, [loading])

    

    const handleDelete = async (caseId) => {
        
        const key = import.meta.env.VITE_API_KEY_trackData;
        const url = `https://api.airtable.com/v0/appl07cKSlVT5aGI4/Table%201?records[]=${caseId}`;
        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json",
                    Authorization:
                        `Bearer ${key}`
                }
            });
            if(!response.ok){
                throw new Error(`Response status: ${response.status}`);
            }
            // const json = await response.json();
            
            setTrackedCase(trackedCase.filter((profile) => profile.id !== caseId))
            
        } catch (error) {
            console.error(error.message);
        }
        setShowSaved("")
        
    }

    const navigate = useNavigate()

    const handleOnClick = (_id) => {
        navigate(`/casetracker/casedetails/${_id}`)
    }
 
    return (<>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
             {loading ? (
                <progress className="progress" max="100">Loading...</progress>
                ) :
            (<table>
                <caption>
                    <h1>Tracked Covid-19 Case Details</h1>
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Case ID</th>
                        <th scope="col">Age</th>
                        <th scope="col">Nationality</th>
                        <th scope="col">Imported or Local transmission</th>
                        <th scope="col">Public Healthcare Institution</th>
                        <th scope="col">Patient Residing Location</th>
                    </tr>
                </thead>
               
                <tbody>
                    {trackedCase.map((patient) => (
                        <tr key={patient.id}>
                            <th scope="row">Case {patient.case_id}</th>
                            <td onClick={() => handleOnClick(patient.case_id)}>{patient.age}</td>
                            <td onClick={() => handleOnClick(patient.case_id)}>{patient.nationality}</td>
                            <td onClick={() => handleOnClick(patient.case_id)}>{patient.imported_local}</td>
                            <td onClick={() => handleOnClick(patient.case_id)}>{patient.public_healthcare_institution}</td>
                            <td onClick={() => handleOnClick(patient.case_id)}>{patient.residing_location}</td>
                            <td className="butCaseTracker"><button onClick={() => handleDelete(patient.id)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                </tfoot>
            </table>)}
        </motion.div>


    </>)
}