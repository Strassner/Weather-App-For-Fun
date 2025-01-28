import { useState } from 'react'
import './stylesheets/App.css'
import './assets/SecretVars.js'
import SearchBar from './SearchBar.jsx'
import { CityContext } from './CityContext.jsx';
import WeatherDataCardHolder from './WeatherDataCardHolder.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import OffCanvasBar from './OffCanvasBar.jsx';

function App() {
  const [city, setCity] = useState('')
  const [cityChanged, setCityChanged] = useState(false);
  return (
    <>
    <CityContext.Provider value={city}>
      <div style={{display: 'flex',  alignItems: 'center',}}>
      <OffCanvasBar changeCity={setCity} updateWeatherData={setCityChanged} />
      {(city != '') ?  
        <h1>{city}</h1>
        : <h1 style={{textAlign: 'center', flexGrow: '1'}}>test</h1>
      }
      </div>
      <WeatherDataCardHolder/> 
    </CityContext.Provider>
    </>
  )
}

export default App
