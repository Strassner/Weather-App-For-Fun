import  Card  from "react-bootstrap/Card";

function WeatherDataCard({title, weatherData}) {
    //this if statement checks if a city/location has been properly queried, if it hasn't (on page load, or other reasons)
    //the weather data in the card will just be a '--'
    if(weatherData.includes('null') || weatherData.includes('undefined')) weatherData='--';
    return(
        <>
        <Card  text="light" style={{ width: '10rem', height:'auto', backgroundColor:'#85A9FF', padding:'0.5rem'}} className="m-2">
            <Card.Body style={{padding:'0', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <h5 style={{}}>{title}</h5>
                <p>{weatherData}</p>
            </Card.Body>
        </Card>
        </>
    );
}

export default WeatherDataCard;