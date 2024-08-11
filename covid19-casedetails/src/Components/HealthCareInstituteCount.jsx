import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useState, useEffect } from "react"

export default function HealthCareInstituteCount({covidData}){

    const [hospitals, setHospitals] = useState()

    useEffect(() => {

        const arrayHospital = covidData.map((hospital) => {
            return hospital.public_healthcare_institution
        })

        
        const hospitalCount = arrayHospital.reduce((acc, hospital) => {
            if (acc[hospital]) {
                acc[hospital] = acc[hospital] + 1;
            } else {
                acc[hospital] = 1;
            }
            return acc;
           
       
        }, {})
        console.log(hospitalCount)
        setHospitals([
            {name: "Alexandra Hospital",  value: 1},
            {name: "CGH",  value: 2},
            {name: "KK Hospital", value: 3},
            {name: "Khoo Teck Puat", value: 1},
            {name: "NCID", value: 57},
            {name: "NUH", value: 3},
            {name: "Sengkang General Hospital", value: 3},
            {name: "SGH", value: 7}
        ])
        
    
    }, [covidData])

    

    
    return(<>

        <h2>Transmission method</h2>
        <main>
            <ResponsiveContainer width={"80%"} height={600}>
                <BarChart data={hospitals}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </main>
    
    
    </>)
}