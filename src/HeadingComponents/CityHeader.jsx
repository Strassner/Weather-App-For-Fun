import { CityContext } from "../CityContext";
import { useContext } from "react";
function CityHeader() {
    const city = useContext(CityContext);

    return(
        <>
        {<h1 style={{color: 'white', textAlign:'center', flexGrow:'1'}}>{(city != '') ?  
            city
            : 'Weather'}</h1>
          }  
        </>
    );
}


export default CityHeader;