

function CentralWeatherBlock({iconUrl, condition}) {

    return (
        <>
            <img src={iconUrl}/>
            <h2>{condition}, {iconUrl}</h2>
        </>
    );
}

export default CentralWeatherBlock;