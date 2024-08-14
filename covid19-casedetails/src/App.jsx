import '@picocss/pico/css/pico.zinc.css';
import { useEffect, useState,} from 'react'
// import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import ListPage from './Pages/ListPage'
import HomePage from './Pages/HomePage'
import MainPage from './Pages/MainPage'
import CaseDetailsPage from './Pages/CaseDetailsPage'
import DataAnalysisPage from './Pages/DataAnalysisPage'
import { getData } from './Services/covidData'
import NavBarContents from './Components/NavBarContents'
import CaseTrackerPage from './Pages/CaseTrackerPage'
import CaseDetailsPageTracker from './Pages/CaseDetailsPageTracker'
import { AnimatePresence } from 'framer-motion';



function App() {
  const [covidData, setCovidData] = useState([])
  const [name, setName] = useState("")
  const location = useLocation()
  const showNavBar = location.pathname !== "/"


  useEffect(() => {
    const loadCovidData = async () => {
      const data = await getData();
      setCovidData(data);

    };
    loadCovidData();
  }, [])
 
  // const navBarContents = () =>

  return (
    <>
      {showNavBar && <NavBarContents name = {name}/>}
      <AnimatePresence>
      <Routes location={location} key = {location.pathname}>
        <Route path = "/" element = {<HomePage name = {name} setName = {setName}/>}/>
        <Route path = "/main" element = {<MainPage/>} />
        <Route path = "/dataanalysis" element = {<DataAnalysisPage covidData = {covidData}/>} />
        <Route path = "/list" element = {<ListPage covidData = {covidData}/>}/>
        <Route path = "/casedetails/:_id" element = {<CaseDetailsPage covidData = {covidData}/>}/>
        <Route path = "/casetracker" element = {<CaseTrackerPage/>}/>
        <Route path = "/casetracker/casedetails/:_id" element = {<CaseDetailsPageTracker covidData = {covidData}/>}/>
      </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
