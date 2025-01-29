import  Card  from "react-bootstrap/Card";

function WeatherDataCard({title, weatherData}) {
    `${weatherData}`.includes('null') ? weatherData='--'
    : console.log('no null');
    return(
        <>
        <Card  text="light" style={{ width: '8rem', height:'auto', backgroundColor:'#85A9FF', padding:'0.5rem'}} className="m-2">
        {/* <Card.Title style={{textAlign:'center', fontSize:'100%'}}>{title}</Card.Title> */}
            <Card.Body style={{padding:'0', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <h5 style={{}}>{title}</h5>
                <p>{weatherData}</p>
            </Card.Body>
        </Card>
        </>
    );
}

export default WeatherDataCard;