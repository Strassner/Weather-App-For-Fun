import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/SecretVars.js'
function App() {
  const [count, setCount] = useState(0)
  const [city, setCity] = useState('')
  return (
    <>
      {(city != '') ?  
        <h1>Current temp in {city} today:</h1>
        : <h1>Enter a city to get the current temperature.</h1>
      }
    </>
  )
}

export default App
