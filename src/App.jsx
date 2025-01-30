import { useState } from 'react'
import './stylesheets/App.css'
import './assets/SecretVars.js'
import { CityContext } from './CityContext.jsx';
import WeatherDataCardHolder from './CentralBlock/WeatherDataCardHolder.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadingComponent from './HeadingComponents/HeadingComponent.jsx';

function App() {
  const [city, setCity] = useState('')
  const [cityChanged, setCityChanged] = useState(false);//whenever cityChanged is set to true, it will trigger an update of components
  return (
    <div className='pretty-div'>
    <CityContext.Provider value={city}>{/**this context provider gives the cityname, which is empty upon page load */}
      <HeadingComponent setCity={setCity} setCityChanged={setCityChanged}/>{/*this component holds the offcanvas(searchbar) and the heading where the city name is displayed */}
      <WeatherDataCardHolder/> {/*this component holds the 'body' of the app, which would include all the displaying of weather info */}
    </CityContext.Provider>
    </div>
  )
}

export default App
