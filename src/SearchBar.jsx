import { useState, useEffect } from "react";
import  WEATHER_API_KEY  from "./assets/SecretVars.js";
const SearchBar = () => {
    const [query, setQuery] = useState(""); //user defined query into the searchbar
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState([]); // cities suggestions from API

    const apiKey = WEATHER_API_KEY;

    const handleInput = (e) => {
        const val = e.target.value;
        setQuery(val);
        if (val.length > 2){
            setLoading(true);
            fetch(`http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${val}`)
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

return (
    <>
    <input type="text" placeholder="Search..." value={query} onChange={handleInput} />
    {loading && <p>Loading...</p>}
    {error && <p>There was an error!</p>}
    {cities.length > 0 && (
        <ul>
            {cities.map((city ) => (
                <li key={city.cityKey} onClick={ () => {selectCity(city)}} >
                        {city.cityName}, {city.cityReigon == '' ? city.cityCountry : city.cityReigon}</li>
                //add mouse over functionality, where onmouseover = bold text
            ))}
        </ul>
    )}
    </>
)
}

export default SearchBar;