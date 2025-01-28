import  Card  from "react-bootstrap/Card";

function WeatherDataCard({title, weatherData}) {
    return(
        <>
        <Card  text="light" style={{ width: '25%', height:'auto', backgroundColor:'#85A9FF'}} className="m-2">
        <Card.Title style={{textAlign:'center', fontSize:'100%'}}>{title}</Card.Title>
            <Card.Body>
                <Card.Text>
                    {weatherData}
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default WeatherDataCard;