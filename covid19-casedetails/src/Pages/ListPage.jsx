import { getData } from "../Services/covidData";
import { useEffect } from "react";
import { useState } from "react";

export default function ListPage({name}){
    const [covidData, setCovidData] = useState([])

    useEffect(() => {
        const loadCovidData = async () => {
            const data = await getData();
            setCovidData(data);

        };
        loadCovidData();
    }, [])

    const nameEmpty = () => {
        if (name === ""){
            return "human"
        } else {
            return name
        }
    }


    return (<>

        <h2>Welcome {nameEmpty}</h2>
        <table>
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