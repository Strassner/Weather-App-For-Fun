import { useContext } from "react";
import { GetWeatherInfo } from "./GetWeatherInfo";
function WeatherDataCardHolder() {
    const weatherInfo = GetWeatherInfo();
//Make this a container for all the weather data cards.
//going to use bootstrap 5 cards
//make a card component, then pass each weather data as props to each card component.
    return(
        <div>
            
        </div>
    );
}

export default WeatherDataCardHolder;