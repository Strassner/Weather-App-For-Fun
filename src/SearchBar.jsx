import { useState, useEffect } from "react";
import  WEATHER_API_KEY  from "./assets/SecretVars.js";
import "./stylesheets/SearchBar.css";
function SearchBar (props)  {
    const [query, setQuery] = useState(""); //user defined query into the searchbar
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState([]); // cities suggestions from API

    const apiKey = WEATHER_API_KEY;

    const handleInput = (e) => {
        props.updateWeatherData(false);
        const val = e.target.value;
        setQuery(val);
        if (val.length > 2){
            setLoading(true);
            fetch(`http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=/${val}`)
            .then((response) =>  response.json())
            .then((data) => {
                console.log(data);
                setCities(data.map((place, index) => ({
                    cityName: place.name, 
                    cityCountry: place.country,
                    cityReigon: place.region,
                    cityKey: crypto.randomUUID()
                })));
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
                console.log(err);
            });
        }else {
            setCities([]);//query less than 2 characters, clear the cities array
        }
    }

    //when city clicked on by mouse, set the query to the city name and clear the cities array
    const selectCity = (city) => {
        setQuery(`${city.cityName}, ${city.cityReigon == '' ? city.cityCountry : city.cityReigon}`);
        setCities([]);
    }

    const handleCitySubmit = (city) => {
        city = '' ? alert("Please enter a city")
        : props.changeCity(city);
        props.updateWeatherData(true);
    }

return (
    <>
    <div>
    <form onSubmit={(e) => {e.preventDefault(); handleCitySubmit(query);}}>
    <input type="text" placeholder="Find your city..." value={query} onChange={handleInput} />
    </form>
    </div>
    <div className="city-list-container">
    {loading && <p>Loading...</p>}
    {error && <p>There was an error!</p>}
    {cities.length > 0 && (
        <ul>
            {cities.map((city ) => (
                <li key={city.cityKey} onClick={ () => {selectCity(city); handleCitySubmit(city.cityName)}} className="city-list" >
                        {city.cityName}, {city.cityReigon == '' ? city.cityCountry : city.cityReigon}</li>
            ))}
        </ul>
    )}
    </div>
    </>
)
}

export default SearchBar;