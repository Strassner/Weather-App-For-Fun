import { useState } from 'react'
import './stylesheets/App.css'
import './assets/SecretVars.js'
import SearchBar from './SearchBar.jsx'
import { CityContext } from './CityContext.jsx';
import WeatherDataCardHolder from './WeatherDataCardHolder.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [city, setCity] = useState('')
  const [cityChanged, setCityChanged] = useState(false);
  return (
    <>
    <CityContext.Provider value={city}>
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
