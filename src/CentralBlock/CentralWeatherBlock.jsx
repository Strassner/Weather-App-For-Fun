

function CentralWeatherBlock({iconUrl, condition, dailyLow, dailyHigh, currentTemp}) {
    //null checking(no city queried yet), used if statement for readability
    //the variables come as a string with their respective pre/postfixes (ºF...)
    //this makes it easy to handle when the city hasn't been queried yet
    if(currentTemp.includes('undefined')){
        currentTemp = '';
        dailyHigh = '';
        dailyLow = '';
    }

    return (
        <>
            <div style={{textAlign:'center'}}>
                <h4 style={{opacity: '75%'}}>{dailyHigh}</h4>
                <h1>{currentTemp}</h1>
                <h4 style={{opacity: '75%'}}>{dailyLow}</h4>
            </div>
            <div>
                {/*theres no need to do undefined checking on the condition and url */}
            <h1>{condition}</h1>
            <img src={iconUrl} style={{width: '100%', height: 'auto'}}/>
            </div>
            {/*this heading displays the current conditions(sunny, windy, overcast), and a little emoji/icon next to it */}
        </>
    );
}

export default CentralWeatherBlock;