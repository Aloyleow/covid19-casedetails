
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts"
import { useEffect, useState } from "react"


export default function AgeGroupCount({covidData}){
    
    const [ageGroups, setAgeGroups] = useState()
    // const [importedLocal, setImportedLocal] = useState([ageToNum])
    

    useEffect(() => {
        let ageGroupA = 0;
        let ageGroupB = 0;
        let ageGroupC = 0;
        let ageGroupD = 0;
        let ageGroupE = 0;
        const newData = covidData.map((age) => {
            return { 
                age: parseInt(age.age)
            }
        })       
        // setAgeToNum(newData)
        for (let i = 0; i < newData.length; i ++){
            if (newData[i].age < 10) {
                ageGroupA += 1
            } else if (newData[i].age < 30){
                ageGroupB +=1
            } else if (newData[i].age < 50){
                ageGroupC +=1
            } else if (newData[i].age < 70){
                ageGroupD +=1
            } else if (newData[i].age >= 70){
                ageGroupE +=1
            }
        }
        setAgeGroups([
            {name: "Ages below 10", value: ageGroupA}, 
            {name: "Ages 10 to 29", value: ageGroupB}, 
            {name: "Ages 30 to 49", value: ageGroupC}, 
            {name: "Ages 50 to 69", value: ageGroupD}, 
            {name: "Ages 70 & above", value: ageGroupE}])
       
    }, [covidData])
    
    // console.log(importedLocal)
    
    
    return (<>

       <h3>Age Group Count</h3>
        <div className = "ageGroup">
            <ResponsiveContainer width={"60%"} height={500}>
                <BarChart data={ageGroups}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />  
                </BarChart>          
            </ResponsiveContainer>
        </div>
        
       
    </>)
}