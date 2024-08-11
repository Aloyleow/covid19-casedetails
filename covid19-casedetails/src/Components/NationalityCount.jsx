import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useState, useEffect } from "react"

export default function NationalityCount({covidData}){


    const [nationalities, setNationalities] = useState()

    useEffect(()=>{

        const arrayNationalities = covidData.map((patient) => {
            return patient.nationality
        })

        
        const nationalitiesCount = arrayNationalities.reduce((acc, hospital) => {
            if (acc[hospital]) {
                acc[hospital] = acc[hospital] + 1;
            } else {
                acc[hospital] = 1;
            }
            return acc;
  
        }, {})
        console.log(nationalitiesCount)
        //this too same as institution problem, fix this soon
        setNationalities([
            {name: "Bangladesh", value: 5},
            {name: "Chinese", value: 20},
            {name: "Indonesia", value: 1},
            {name: "Singapore/PR", value: 51},
        ])


    },[covidData])
    
    return (<>

        <main>
            <ResponsiveContainer width={"50%"} height={600}>
                <BarChart data={nationalities}>
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