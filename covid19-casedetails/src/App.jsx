import { useEffect, useState } from 'react'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import ListPage from './Pages/ListPage'
import HomePage from './Pages/HomePage'
import MainPage from './Pages/MainPage'
import CaseDetailsPage from './Pages/CaseDetailsPage'
import DataAnalysisPage from './Pages/DataAnalysisPage'
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

    const nameEmpty = () => {
      if (name === ""){
          return "Human"
      } else {
          return name
      }   
  }
  
  
  
  return (
    <>
      <Routes>
        <Route path = "/" element = {<HomePage name = {name} setName = {setName}/>}/>
        <Route path = "/main" element = {<MainPage nameEmpty = {nameEmpty()}/>} />
        <Route path = "/dataanalysis" element = {<DataAnalysisPage covidData = {covidData} nameEmpty = {nameEmpty()}/>} />
        <Route path = "/list" element = {<ListPage covidData = {covidData} nameEmpty = {nameEmpty()} />}/>
        <Route path = "/list/:_id" element = {<CaseDetailsPage covidData = {covidData}/>}/>
      </Routes>        
    </>
  )
}

export default App
