import { Legend, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { useEffect, useState } from "react"


export default function ImportedLocalCount({covidData}){

    const [importedLocal, setImportedLocal] = useState([])
    const color = [ "#FBCEB1", "#D2122E",]
    
    useEffect(() => {
        let x = 0
        let y = 0
        for(let i = 0; i < covidData.length; i ++){
            if (covidData[i].imported_local === "Imported"){
                x += 1
            } else if (covidData[i].imported_local === "Local"){
                y += 1
            }
        }
        setImportedLocal([{name: "Imported", value: x}, {name: "Local", value: y}])
        

    }, [covidData])

    
    
    return (<>

       <h3>Transmission method</h3>
       <div className="importedLocalPage">     
        <ResponsiveContainer width={"40%"} height={500}>
        <PieChart>
          <Pie
            data={importedLocal}
            dataKey="value"
            nameKey="name"
            cx="50%"  /* Center X position of the PieChart */
            cy="50%"  /* Center Y position of the PieChart */
            outerRadius={200} /* Size of the pie chart */
            fill="#8884d8"
            >
            {importedLocal.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={color[index % color.length]} />
            ))}    
            </Pie>
          <Tooltip />
          <Legend/>
        </PieChart>
        </ResponsiveContainer>
            
        </div>
        
       
    </>)
}