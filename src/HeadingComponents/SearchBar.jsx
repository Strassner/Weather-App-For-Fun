import { useState, useEffect } from "react";
import  WEATHER_API_KEY  from "../assets/SecretVars.js";
import "../stylesheets/SearchBar.css";

//this is the search bar within the offcanvas

//props: changeCity is 'setCity', which sets the city context in the parent of this component
//updateWeatherData is a bool that tells when other components should update
//setShow is a bool that tells the offcanvas bar whether to show or not
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
        if (val.length > 2){//only want to start fetching for autocomplete when 2 or more chars have been entered
            setLoading(true);
            fetch(`http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=/${val}`)
            .then((response) =>  response.json())
            .then((data) => {
                console.log(data);
                setCities(data.map((place, index) => ({//this sets the list of city objects, which is displayed as a list
                    cityName: place.name, 
                    cityCountry: place.country,
                    cityReigon: place.region,
                    cityKey: crypto.randomUUID()//used as the key when displaying the list 
                })));
                setLoading(false);//data received, don't display the loading message anymore
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

    //set the query to the city name and clear the cities array, doesn't affect anything globally, just displays the 
    //chosen city in the searchbar
    const selectCity = (city) => {
        setQuery(`${city.cityName}, ${city.cityReigon == '' ? city.cityCountry : city.cityReigon}`);
        setCities([]);
    }

    //this is called when the user clicks on the city in the list
    const handleCityClick = (city) => {
        city = '' ? alert("Please enter a city")
        : props.changeCity(city), props.updateWeatherData(true), props.setOffCanvasShow(false);
    }

    //this is called when the user submits the form/searchbar (like pressing enter)
    const handleCityFormSubmit = () => {
        cities.length > 0 ? handleCityClick(cities[0].cityName) 
        : alert("Please enter a city");//error message pops up at the top of the screen
    }

    //the searchbar and the list of cities
return (
    <div className="pretty-div">
    <div>
    <form  onSubmit={(e) => {e.preventDefault(); handleCityFormSubmit(query);}}> 
    <input type="text" placeholder="Find your city..." value={query} onChange={handleInput} className="search-bar" />
    </form>
    </div>
    <div className="city-list-container">
    {loading && <p>Loading...</p>}
    {error && <p>There was an error!</p>}
    {cities.length > 0 && (
        <ul>
            {/*foreach city, display them in the list. 
                sometimes cities dont have a reigon, only a country, so if 
                they don't have a reigon, then the country is displayed instead*/}
            {cities.map((city ) => (
                <li key={city.cityKey} onClick={ () => {selectCity(city); handleCityClick(city.cityName)}} className="city-list" >
                        {city.cityName}, {city.cityReigon == '' ? city.cityCountry : city.cityReigon}</li>
            ))}
        </ul>
    )}
    </div>
    </div>
)
}

export default SearchBar;