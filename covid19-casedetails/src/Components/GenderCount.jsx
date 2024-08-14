import { Legend, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { useEffect, useState } from "react"


export default function GenderCount({covidData}){

    const [gender, setGender] = useState([]);
    const COLORS = ["#0066b2", "#FFC0CB"];
    
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

        <h3>Gender Count</h3>
        
        <div className="cardGender">     
        <ResponsiveContainer width={"40%"} height={500}>
        <PieChart>
          <Pie
            data={gender}
            dataKey="value"
            nameKey="name"
            cx="50%"  /* Center X position of the PieChart */
            cy="50%"  /* Center Y position of the PieChart */
            outerRadius={200} /* Size of the pie chart */
            fill="#8884d8"
            >
            {gender.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}    
            </Pie>
          <Tooltip />
          <Legend/>
        </PieChart>
        </ResponsiveContainer>
            
        </div>
        
        
       
    </>)
}