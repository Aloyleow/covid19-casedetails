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

    console.log(trackedCase)
 
    
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
                    <tr key={patient.case_id}>
                        <th scope="row">{patient.case_id}</th>
                        <td>{patient.age}</td>
                        <td>{patient.nationality}</td>
                        <td>{patient.imported_local}</td>
                        <td>{patient.public_healthcare_institution}</td>
                        <td>{patient.residing_location}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
            </tfoot>
        </table>
    
    
    </>)
}