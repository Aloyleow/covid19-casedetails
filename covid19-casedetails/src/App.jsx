import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ListPage from './Pages/ListPage'
import HomePage from './Pages/HomePage'
import CaseDetailsPage from './Pages/CaseDetailsPage'


function App() {
  const [name, setName] = useState("")
  
  
  
  return (
    <>
      <Routes>
        <Route path = "/" element = {<HomePage name = {name} setName = {setName}/>}/>
        <Route path = "/list" element = {<ListPage name = {name}/>}/>
        <Route path = "/list/:_id" element = {<CaseDetailsPage/>}/>
      </Routes>        
    </>
  )
}

export default App
