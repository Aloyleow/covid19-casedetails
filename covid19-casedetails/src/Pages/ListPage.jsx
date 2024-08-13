import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

// export default function ListPage({ covidData }){
    
    
//     const navigate = useNavigate()

//     const handleOnClick = (_id) => {
//         navigate(`/casedetails/${_id}`)
//     }

//     return (<>

       
//         <table className="sortable">
//             <caption>
//                 <h1>List of Covid-19 Case Details</h1>
//             </caption>
//             <thead>
//                 <tr>
//                     <th scope="col">Case ID</th>
//                     <th scope="col">Age</th>
//                     <th scope="col">Nationality</th>
//                     <th scope="col">Imported or Local transmission</th>
//                     <th scope="col">Public Healthcare Institution</th>
//                     <th scope="col">Patient Residing Location</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {covidData.map((patient) => (               
//                     <tr key={patient.case_id} onClick = {() => handleOnClick(patient._id)}>
//                         <th scope="row">{patient.case_id}</th>
//                         <td>{patient.age}</td>
//                         <td>{patient.nationality}</td>
//                         <td>{patient.imported_local}</td>
//                         <td>{patient.public_healthcare_institution}</td>
//                         <td>{patient.residing_location}</td>
//                     </tr>
//                 ))}
//             </tbody>
//             <tfoot>
//             </tfoot>
//         </table>
   
//     </>)
// }

export default function ListPage({ covidData }) {
    const [covidDataStore] = useState(covidData)
    const [originalData, setOriginalData] = useState(covidData)
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const navigate = useNavigate();

    const handleOnClick = (_id) => {
        navigate(`/casedetails/${_id}`);
    };

    const handleReset = () => {
        setOriginalData(covidDataStore);
        setSortConfig({ key: null, direction: 'asc' });

    }

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        const sortedArray = [...sortedData].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
        setOriginalData(sortedArray)
        setSortConfig({ key, direction });
    };

    const sortedData = React.useMemo(() => {
        let sortableData = [...covidData];
        if (sortConfig.key !== null) {
            sortableData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableData;
    }, [covidData, sortConfig]);

    return (
        <>
            <table className="listTable">
                <caption>
                    <h1>List of Covid-19 Case Details</h1>
                    <button className = "listPageBut"onClick={handleReset}>Reset List</button>
                </caption>
                <thead >
                    <tr>
                        <th scope="col" onClick={() => handleSort('case_id')}>
                            Case ID {sortConfig.key === 'case_id' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                        </th>
                        <th scope="col" onClick={() => handleSort('age')}>
                            Age {sortConfig.key === 'age' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                        </th>
                        <th scope="col" onClick={() => handleSort('nationality')}>
                            Nationality {sortConfig.key === 'nationality' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                        </th>
                        <th scope="col" onClick={() => handleSort('imported_local')}>
                            Imported or Local transmission {sortConfig.key === 'imported_local' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                        </th>
                        <th scope="col" onClick={() => handleSort('public_healthcare_institution')}>
                            Public Healthcare Institution {sortConfig.key === 'public_healthcare_institution' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                        </th>
                        <th scope="col" onClick={() => handleSort('residing_location')}>
                            Patient Residing Location {sortConfig.key === 'residing_location' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((patient) => (
                        <tr id = "listTableRow" key={patient.case_id} onClick={() => handleOnClick(patient._id)}>
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
        </>
    );
}