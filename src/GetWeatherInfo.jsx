import { useState, useContext, useEffect } from "react";
import { CityContext } from "./CityContext.jsx";
import WEATHER_API_KEY from './assets/SecretVars.js'
export const GetWeatherInfo = () => {
    const city = useContext(CityContext);
    const apiKey= WEATHER_API_KEY;
    const [isMounted, setIsMounted] = useState(false);
    const [weatherInfo, setWeatherInfo] = useState({
        temp_f: null,
        feelslike_f: null,
        windchill_f: null,
        heatindex_f: null,
        wind_mph: null,
        wind_dir: null,
        precip_in: null,
        humidity: null,
    });

    useEffect(() => {
        const fetchWeather = async () => {
            fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
            .then((response) => response.json())
            .then((data) => {
                setWeatherInfo({
                    temp_f: data.current.temp_f,
                    feelslike_f: data.current.feelslike_f,
                    windchill_f: data.current.windchill_f,
                    heatindex_f: data.current.heatindex_f,
                    wind_mph: data.current.wind_mph,
                    wind_dir: data.current.wind_dir,
                    precip_in: data.current.precip_in,
                    humidity: data.current.humidity
                });
            })
        }
         isMounted ? fetchWeather()//this stops from fetching data on component mount
         :  setIsMounted(true);
    }, [city]);

    return weatherInfo;
}


//export default GetWeatherInfo