import CentralWeatherBlock from "./CentralWeatherBlock";
import { GetWeatherInfo } from "./GetWeatherInfo";
import WeatherDataCard from "./WeatherDataCard";

function WeatherDataCardHolder() {
    const weatherInfo = GetWeatherInfo();
    return(
        <>
        <div className="pt-3" style={{display:'flex', justifyContent:'space-between'}}>
            {/*three columns on the page */}
            <div style={{flexDirection:'column'}}>
                {/*I pass the props as strings because it's easier to handle when the city hasn't been queried and data is null/undefined */}
            <WeatherDataCard title="Humidity" weatherData={`${weatherInfo.humidity}%`}/>
            <WeatherDataCard title="Feels Like" weatherData={`${weatherInfo.feelslike_f} ºF`}/>
            <WeatherDataCard title="Sunrise" weatherData={`${weatherInfo.sunrise}`}/>
            <WeatherDataCard title="Sunset" weatherData={`${weatherInfo.sunset}`}/>            
            </div>
            <div style={{flexDirection:'column', alignItems:'center', display:'flex', color:'white', justifyContent:'space-around' }}>
                {/*because this is a column, alignItems centers horizontally, and justifyContent evens space out veritcally */}
                <CentralWeatherBlock iconUrl={weatherInfo.condition_icon_url} condition={weatherInfo.condition}
                dailyLow={`L: ${weatherInfo.today_low_f}`} dailyHigh={`H: ${weatherInfo.today_high_f}`} currentTemp={`${weatherInfo.temp_f} ºF` }/>
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