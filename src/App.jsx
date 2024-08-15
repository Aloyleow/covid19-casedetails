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
import CaseTrackerDetailsPage from './Pages/CaseTrackerDetailsPage';
import { AnimatePresence } from 'framer-motion';



function App() {
  const [showSaved, setShowSaved] = useState("")
  const [covidData, setCovidData] = useState([])
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
      
      <AnimatePresence>
      {showNavBar && <NavBarContents/>}
      <Routes location={location} key = {location.pathname}>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/main" element = {<MainPage/>} />
        <Route path = "/dataanalysis" element = {<DataAnalysisPage covidData = {covidData}/>} />
        <Route path = "/list" element = {<ListPage covidData = {covidData}/>}/>
        <Route path = "/casedetails/:_id" element = {<CaseDetailsPage showSaved = {showSaved} setShowSaved = {setShowSaved} covidData = {covidData}/>}/>
        <Route path = "/casetracker" element = {<CaseTrackerPage setShowSaved = {setShowSaved}/>}/>
        <Route path = "/casetracker/casedetails/:_id" element = {<CaseTrackerDetailsPage covidData = {covidData} />}/>
      </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
