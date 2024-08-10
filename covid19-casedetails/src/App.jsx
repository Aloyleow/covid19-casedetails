import { useEffect, useState } from 'react'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import ListPage from './Pages/ListPage'
import HomePage from './Pages/HomePage'
import CaseDetailsPage from './Pages/CaseDetailsPage'
import { getData } from './Services/covidData'


function App() {
  const [covidData, setCovidData] = useState([])
  const [name, setName] = useState("")
  

    useEffect(() => {
        const loadCovidData = async () => {
            const data = await getData();
            setCovidData(data);

        };
        loadCovidData();
    }, [])
  
  
  
  return (
    <>
      <Routes>
        <Route path = "/" element = {<HomePage name = {name} setName = {setName}/>}/>
        <Route path = "/list" element = {<ListPage covidData = {covidData} name = {name} />}/>
        <Route path = "/list/:_id" element = {<CaseDetailsPage covidData = {covidData}/>}/>
      </Routes>        
    </>
  )
}

export default App
