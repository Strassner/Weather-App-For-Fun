import { useContext } from "react";
import { GetWeatherInfo } from "./GetWeatherInfo";
import WeatherDataCard from "./WeatherDataCard";
import { CardGroup, Row } from "react-bootstrap";
function WeatherDataCardHolder() {
    const weatherInfo = GetWeatherInfo();
//Make this a container for all the weather data cards.
//going to use bootstrap 5 cards
//make a card component, then pass each weather data as props to each card component.
    return(
        <div className="pt-3">
            <Row md={2} lg={3} xl={4} xxl={2} sm={2} className="g-2">
            <WeatherDataCard title="Current Temperature" weatherData={weatherInfo.temp_f}/>
            <WeatherDataCard title="Feels Like" weatherData={weatherInfo.feelslike_f}/>
            <WeatherDataCard title="Wind Chill" weatherData={weatherInfo.windchill_f}/>
            <WeatherDataCard title="Heat Index" weatherData={weatherInfo.heatindex_f}/>
            
            </Row>
        </div>
    );
}

export default WeatherDataCardHolder;