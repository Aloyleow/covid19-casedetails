import { getTrackData } from "../Services/getTrackData"
import { useEffect, useState } from "react"

export default function CaseTrackerPage(){

    const [trackedCase, setTrackedCase] = useState([])

    useEffect(() => {

        const loadCase = async () => {
            const data = await getTrackData()
            setTrackedCase(data)
            console.log(data)
        }


        loadCase()

    }, [])

    const handleDelete = async (caseId) => {
        const url = `https://api.airtable.com/v0/appl07cKSlVT5aGI4/Table%201?records[]=${caseId}`;
        console.log(caseId)
        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer pat2UuA0NYZBqUWxm.563541c4ccdb50f1705cae0506558cd625ff60f690a37fafadcdd1a317800b24"
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
    }
 
    
    return (<>

        <table>
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
                        <th scope="row">{patient.case_id}</th>
                        <td>{patient.age}</td>
                        <td>{patient.nationality}</td>
                        <td>{patient.imported_local}</td>
                        <td>{patient.public_healthcare_institution}</td>
                        <td>{patient.residing_location}</td>
                        <td><button onClick={() => handleDelete(patient.id)}>Remove</button></td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
            </tfoot>
        </table>
    
    
    </>)
}