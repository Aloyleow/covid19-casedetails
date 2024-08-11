import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useEffect, useState } from "react"


export default function ImportedLocalCount({covidData}){

    const [importedLocal, setImportedLocal] = useState()
    
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

       <h2>Transmission method</h2>
        <main>
            <ResponsiveContainer width={"20%"} height={300}>
                <BarChart data={importedLocal}>
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