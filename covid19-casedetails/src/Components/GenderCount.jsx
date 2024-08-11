import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useEffect, useState } from "react"


export default function GenderCount({covidData}){

    const [gender, setGender] = useState()
    
    useEffect(() => {
        let x = 0
        let y = 0
        for(let i = 0; i < covidData.length; i ++){
            if (covidData[i].gender === "M"){
                x += 1
            } else if (covidData[i].gender === "F"){
                y += 1
            }
        }
        setGender([{name: "Male", value: x}, {name: "Female", value: y}])

    }, [covidData])

    
    
    return (<>

       <h2>gender</h2>
        <main>
            <ResponsiveContainer width={"20%"} height={300}>
                <BarChart data={gender}>
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