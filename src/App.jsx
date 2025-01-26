import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './stylesheets/App.css'
import './assets/SecretVars.js'
import SearchBar from './SearchBar.jsx'
import DisplayCurrentTemp from './DisplayCurrentTemp.jsx'
import DisplayCurrentPrecipitation from './DisplayCurrentPrecipitation.jsx'
import { CityContext } from './CityContext.jsx';
//import  {GetWeatherInfo}  from './GetWeatherInfo.jsx';
import WeatherDataCardHolder from './WeaherDataCardHolder.jsx'

function App() {
  const [city, setCity] = useState('')
  const [cityChanged, setCityChanged] = useState(false);
  return (
    <>
    <CityContext.Provider value={city}>
      {/* <GetWeatherInfo/> */}
      {(city != '') ?  
        <h1>Current temp in {city} today:</h1>
        : <h1>Enter a city to get the current temperature.</h1>
      }
      <SearchBar changeCity={setCity} updateWeatherData={setCityChanged}/>
      <WeatherDataCardHolder/> 
    </CityContext.Provider>
    </>
  )
}

export default App
