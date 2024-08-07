import { useEffect, useState } from 'react'
import './App.css'
import { getData } from './Services/covidData'



function App() {
  
  const [covidData, setCovidData] = useState([])

  useEffect(() => {
    const loadCovidData = async () => {
      const data = await getData();
      setCovidData(data);

    };
    loadCovidData();
  }, [])
  
  // const array = () => {
  //   for(let i = 0; i < covidData.length; i ++){
  //     console.log(covidData[i][2])
  //     }
    
  // }

  // array()

  return (
    <>
      <h1>Hello Human</h1>
      <ul>
        {/* {covidData[0].map((event, index) => (<li key={index}>{event.gender}</li>))} */}
      </ul>
      
    </>
  )
}

export default App
