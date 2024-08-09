import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ListPage from './Pages/ListPage'
import HomePage from './Pages/HomePage'


function App() {
  const [name, setName] = useState("")
  
  
  
  return (
    <>
      <h1>Hello Human</h1>
      <Routes>
        <Route path = "/" element = {<HomePage name = {name} setName = {setName}/>}/>
        <Route path = "/list" element = {<ListPage name = {name}/>}/>
      </Routes>      
        {/* {covidData.map((event, index) => (<li key={index}>{event.gender}</li>))} */}     
    </>
  )
}

export default App
