import CentralWeatherBlock from "./CentralWeatherBlock";
import { GetWeatherInfo } from "./GetWeatherInfo";
import WeatherDataCard from "./WeatherDataCard";

function WeatherDataCardHolder() {
    const weatherInfo = GetWeatherInfo();
    return(
        <>
        <div className="pt-3" style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{flexDirection:'column'}}>
            <WeatherDataCard title="Humidity" weatherData={`${weatherInfo.humidity}%`}/>
            <WeatherDataCard title="Feels Like" weatherData={`${weatherInfo.feelslike_f} ºF`}/>
            <WeatherDataCard title="Sunrise" weatherData={`${weatherInfo.sunrise}`}/>
            <WeatherDataCard title="Sunset" weatherData={`${weatherInfo.sunset}`}/>            
            </div>


            <div>
                <CentralWeatherBlock iconUrl={weatherInfo.iconUrl} condition={weatherInfo.condition}/>
            </div>


            <div style={{flexDirection:'column'}}>
            <WeatherDataCard title="Wind" weatherData={`${weatherInfo.wind_dir} ${weatherInfo.wind_mph} MPH`}/>
            <WeatherDataCard title="Precipitation" weatherData={`${weatherInfo.precip_chance}%`}/>
            <WeatherDataCard title="Cloud Cover" weatherData={`${weatherInfo.cloud}%`}/>
            <WeatherDataCard title="UV" weatherData={`${weatherInfo.uv}`}/>    

            </div>
        </div>
        </>
    );
}

export default WeatherDataCardHolder;