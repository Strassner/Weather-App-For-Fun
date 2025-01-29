import { useState } from 'react'
import './stylesheets/App.css'
import './assets/SecretVars.js'
import { CityContext } from './CityContext.jsx';
import WeatherDataCardHolder from './WeatherDataCardHolder.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadingComponent from './HeadingComponents/HeadingComponent.jsx';

function App() {
  const [city, setCity] = useState('')
  const [cityChanged, setCityChanged] = useState(false);
  return (
    <div className='pretty-div'>
    <CityContext.Provider value={city}>
      <HeadingComponent setCity={setCity} setCityChanged={setCityChanged}/>
      <WeatherDataCardHolder/> 
    </CityContext.Provider>
    </div>
  )
}

export default App
