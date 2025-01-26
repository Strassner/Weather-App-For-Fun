import  Card  from "react-bootstrap/Card";

function WeatherDataCard({title, weatherData}) {
    return(
        <>
        <Card bg="dark" text="light" style={{ width: '12rem'}} className="m-2">
        <Card.Title>{title}</Card.Title>
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