import { useState, useContext, useEffect } from "react";
import { CityContext } from "../CityContext.jsx";
import WEATHER_API_KEY from '../assets/SecretVars.js'
export const GetWeatherInfo = () => {
    const city = useContext(CityContext);
    const apiKey= WEATHER_API_KEY;
    const [isMounted, setIsMounted] = useState(false);
    const [weatherInfo, setWeatherInfo] = useState({});

    useEffect(() => {
        const fetchWeather = async () => {
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`)
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
                    humidity: data.current.humidity,
                    cloud: data.current.cloud,
                    sunrise: data.forecast.forecastday[0].astro.sunrise,
                    sunset: data.forecast.forecastday[0].astro.sunset,
                    precip_chance: data.forecast.forecastday[0].day.daily_chance_of_rain,
                    uv: data.forecast.forecastday[0].day.uv,
                    condition_icon_url: data.current.condition.icon,
                    condition: data.current.condition.text,
                });
            })
        }
         isMounted ? fetchWeather()//this stops from fetching data on component mount
         :  setIsMounted(true);
    }, [city]);

    return weatherInfo;
}
