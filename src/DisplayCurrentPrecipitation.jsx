import { useState, useContext, useEffect } from 'react';
import { CityContext } from './CityContext.jsx';

function DisplayCurrentPrecipitation() { 
//next thing to do: the temp/precip/...data only changed when the prop shouldUpdate is true, and is changed. 
//figure out a better way to handle when the data should be updated.
    const city = useContext(CityContext);


    useEffect(() => {
         
    }, [city]);
    




    return(
        <div>
            <h3>Precipitation in {city}: </h3>
        </div>
    );
}

export default DisplayCurrentPrecipitation;