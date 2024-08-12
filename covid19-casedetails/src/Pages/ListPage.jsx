// import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ListPage({ covidData }){
    
    
    const navigate = useNavigate()

    const handleOnClick = (_id) => {
        navigate(`/casedetails/${_id}`)
    }

    return (<>

       
        <table className="sortable">
            <caption>
                <h1>List of Covid-19 Case Details</h1>
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
                {covidData.map((patient) => (               
                    <tr key={patient.case_id} onClick = {() => handleOnClick(patient._id)}>
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