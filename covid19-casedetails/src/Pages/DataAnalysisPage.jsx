import { useState, useEffect } from "react"
import GenderCount from "../Components/GenderCount"
import ImportedLocalCount from "../Components/ImportedLocalCount"

 
export default function DataAnalysisPage({covidData}){
    
    const [analysisSelected, setAnalysisSelected] = useState("Imported vs Local")
    
    //Understand more on how reduce is being implemented
    //Data gotten

    const handleChange = (event) => {setAnalysisSelected(event.target.value)}

    return (<>

    
        <h1>Analysis</h1>
        <div>
            <select value = {analysisSelected} onChange= {(event)=>handleChange(event)}>
                <option>Gender Count</option>
                <option>Imported vs Local</option>
            </select>
            {analysisSelected === "Gender Count"?<GenderCount covidData = {covidData}/>:"" }
            {analysisSelected === "Imported vs Local"?<ImportedLocalCount covidData = {covidData} />:""}
        </div>
    
    </>)
}