import { useContext } from "react";
import { GetWeatherInfo } from "./GetWeatherInfo";
import WeatherDataCard from "./WeatherDataCard";
import { CardGroup, Row } from "react-bootstrap";
function WeatherDataCardHolder() {
    const weatherInfo = GetWeatherInfo();
    return(
        <>
        <div className="pt-3" style={{display:'flex', flexDirection:'column'}}>
            
            <WeatherDataCard title="Wind" weatherData={`${weatherInfo.wind_dir} ${weatherInfo.wind_mph} MPH`}/>
            <WeatherDataCard title="Feels Like" weatherData={`${weatherInfo.feelslike_f} ºF`}/>
            <WeatherDataCard title="Wind Chill" weatherData={`${weatherInfo.windchill_f} ºF`}/>
            <WeatherDataCard title="Heat Index" weatherData={`${weatherInfo.heatindex_f} ºF`}/>            
        </div>
        
        </>
    );
}

export default WeatherDataCardHolder;