import { createContext, useContext, useState } from "react";
import { CityContext } from './CityContext.jsx';

export const WeatherInfoContext = createContext({
    temp_f: null,
    feelslike_f: null,
    windchill_f: null,
    heatindex_f: null,
    wind_mph: null,
    wind_dir: null,
    precip_in: null,
    humidity: null,
});


