import { useEffect, useState } from 'react'
import './App.css'

async function getData() {
  const url = "https://data.gov.sg/api/action/datastore_search?resource_id=d_554627df56037a1296507f35c374f79d";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const result = [json.result.records];
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

function App() {
  getData()
  // const [covidData, setCovidData] = useState([])

  // useEffect(() => {
  //   const loadCovidData = async () => {
  //     const data = await getData();
  //     setCovidData(data);

  //   };
  //   loadCovidData();
  // }, [])
  
  

  return (
    <>
      <h4></h4>
      
    </>
  )
}

export default App
