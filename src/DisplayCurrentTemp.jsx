import { useEffect, useState } from 'react';
import WEATHER_API_KEY from './assets/SecretVars.js'


function DisplayCurrentTemp({city, shouldUpdate}) {
    const apiKey= WEATHER_API_KEY;
    //const [city, setCity] = useState(null);
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    // useEffect(() => {
    //     const fetchWeather = async () => {//never uses weather const, maybe can remove fetch weather and minify
    //          setLoading(true);
    //          setError(null);
    //          fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    //             .catch((err) => {
    //                 setError(err);
    //                 setLoading(false);
    //                 console.log(err);
    //             })
    //             .then((response) => {
    //                 return response.json();
    //             })
    //             .then((data) => {
    //                 setWeatherInfo(data);
    //                 setLoading(false);
    //             });
    //     }

    //     shouldUpdate ? fetchWeather() : console.log('no update');
    // }, [shouldUpdate]);

    if(error) {
        return 'there was an error! ';
    }

    if(loading) {
        return 'loading...';
    }

    if(weatherInfo) {
        console.log(weatherInfo.current.temp_f);
        return (
            <>
                <h3>Temp: {weatherInfo.current.temp_f}</h3>
            </>
        );
    }
}

export default DisplayCurrentTemp;