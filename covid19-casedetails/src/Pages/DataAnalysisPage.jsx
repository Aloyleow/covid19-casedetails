import { useState} from "react"
import GenderCount from "../Components/GenderCount"
import ImportedLocalCount from "../Components/ImportedLocalCount"
import AgeGroupCount from "../Components/AgeGroupCount"
import HealthCareInstituteCount from "../Components/HealthCareInstituteCount"

 
export default function DataAnalysisPage({covidData, nameEmpty}){
    
    const [analysisSelected, setAnalysisSelected] = useState("Imported vs Local")

    const handleChange = (event) => {setAnalysisSelected(event.target.value)}

    return (<>
      
        <h2>Welcome {nameEmpty}</h2>
        <h1>Analysis</h1>
        <div>
            <select value = {analysisSelected} onChange= {(event)=>handleChange(event)}>
                <option>Gender Count</option>
                <option>Imported vs Local</option>
                <option>Age Group</option>
                <option>Hospital Visited Count</option>
            </select>
            {analysisSelected === "Gender Count"?<GenderCount covidData = {covidData}/>:"" }
            {analysisSelected === "Imported vs Local"?<ImportedLocalCount covidData = {covidData} />:""}
            {analysisSelected === "Age Group"?<AgeGroupCount covidData = {covidData}/>:"" }
            {analysisSelected === "Hospital Visited Count"?<HealthCareInstituteCount covidData = {covidData}/>:"" }
        </div>
    
    </>)
}